"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  ArrowLeft, Save, CheckCircle2, ChevronRight, ChevronLeft,
  Hash, Calendar, CreditCard, Link2, Key, Shield, DollarSign,
  Phone, User, FileText, Download, FileOutput, Table
} from 'lucide-react';
import { createAccountTransaction, generateNextTransactionId } from '../../services/transactionService';
import { generateCustomerPDF, generateInternalPDF } from '../../lib/pdfGenerator';
import { exportToExcel } from '../../lib/excelExport';
import { toast } from 'sonner';

const STEPS = [
  { id: 0, label: 'Deal Info', icon: Hash },
  { id: 1, label: 'Login Details', icon: Key },
  { id: 2, label: 'Guarantee', icon: Shield },
  { id: 3, label: 'Financials', icon: DollarSign },
  { id: 4, label: 'Contacts', icon: Phone },
];

const Label = ({ children }) => (
  <label className="block text-[11.5px] uppercase tracking-wider font-bold text-[var(--color-muted)] mb-2.5 ml-1">{children}</label>
);

const Field = ({ children, span }) => (
  <div className={`flex flex-col ${span ? 'col-span-full' : ''}`}>{children}</div>
);

export default function CreateTransaction({ onBack }) {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedTransaction, setSavedTransaction] = useState(null);
  const [nextId, setNextId] = useState('Loading...');
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    if (step === STEPS.length - 1) {
      setCanSubmit(false);
      const t = setTimeout(() => setCanSubmit(true), 600);
      return () => clearTimeout(t);
    }
  }, [step]);


  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    defaultValues: {
      transaction_id: '',
      transaction_date: new Date().toISOString().split('T')[0],
      mode_of_deal: 'WhatsApp',
      mode_of_payment: 'Full Payment via UPI / Bank Transfer',
      payment_status: 'Fully Paid',
      secondary_login_provider: 'Null',
      guarantee_plan: 'Not Applicable',
      primary_mothermail_status: 'Given To Customer',
      secondary_mothermail_status: 'Given To Customer',
      primary_guarantee_void: 'date',
      secondary_guarantee_void: 'date',
      owner_phone: '+91',
      seller_phone: '+91',
      reseller_phone: '+91',
      buyer_phone: '+91',
      owner_phone_countryCode: '+91',
      seller_phone_countryCode: '+91',
      reseller_phone_countryCode: '+91',
      buyer_phone_countryCode: '+91',
    }
  });

  useEffect(() => {
    generateNextTransactionId()
      .then(id => { setNextId(id); setValue('transaction_id', id); })
      .catch(() => { setNextId('MBSA403'); setValue('transaction_id', 'MBSA403'); });

  }, []);

  const costPrice = parseFloat(watch('owner_price')) || 0;
  const soldPrice = parseFloat(watch('sold_price')) || 0;
  const profit = soldPrice - costPrice;
  const primaryVoid = watch('primary_guarantee_void');
  const secondaryVoid = watch('secondary_guarantee_void');

  const countryCodes = {
    owner_phone: watch('owner_phone_countryCode') || '+91',
    seller_phone: watch('seller_phone_countryCode') || '+91',
    reseller_phone: watch('reseller_phone_countryCode') || '+91',
    buyer_phone: watch('buyer_phone_countryCode') || '+91',
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const cleanPhone = (val, key) => {
        const prefix = countryCodes[key] || '+91';
        if (!val || val === prefix) return '';
        return val;
      };
      const mainData = {
        transaction_id: data.transaction_id,
        transaction_type: 'Account',
        transaction_date: data.transaction_date,
        mode_of_deal: data.mode_of_deal,
        mode_of_payment: data.mode_of_payment,
        payment_status: data.payment_status,
        owner_price: costPrice,
        sold_price: soldPrice,
        profit: profit,
        buyer_phone: cleanPhone(data.buyer_phone, 'buyer_phone'),
        owner_phone: cleanPhone(data.owner_phone, 'owner_phone'),
        seller_phone: cleanPhone(data.seller_phone, 'seller_phone'),
        reseller_phone: cleanPhone(data.reseller_phone, 'reseller_phone'),
      };
      const detailData = {
        product_link: data.product_link,
        primary_login_provider: data.primary_login_provider,
        primary_credentials: data.primary_credentials,
        secondary_login_provider: data.secondary_login_provider,
        secondary_credentials: data.secondary_credentials,
        primary_mothermail_status: data.primary_mothermail_status,
        secondary_mothermail_status: data.secondary_mothermail_status,
        guarantee_plan: data.guarantee_plan,
        primary_unlink_date: data.primary_unlink_date || null,
        secondary_unlink_date: data.secondary_unlink_date || null,
        primary_guarantee_void: data.primary_guarantee_void,
        primary_guarantee_void_date: data.primary_guarantee_void === 'date' ? (data.primary_guarantee_void_date || null) : null,
        secondary_guarantee_void: data.secondary_guarantee_void,
        secondary_guarantee_void_date: data.secondary_guarantee_void === 'date' ? (data.secondary_guarantee_void_date || null) : null,
        owner_proof_link: data.owner_proof_link,
      };
      const saved = await createAccountTransaction(mainData, detailData);
      setSavedTransaction({ ...saved, ...mainData, account_transactions: [detailData] });
      toast.success(`Transaction ${data.transaction_id} saved successfully!`);
    } catch (err) {
      console.error(err);
      toast.error('Failed to save transaction. Check console for details.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const inputClasses = "w-full bg-black/40 border border-[var(--color-border)] rounded-xl py-3 px-4 text-[14px] text-white focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] transition-all placeholder-white/20";
  const selectClasses = `${inputClasses} appearance-none cursor-pointer`;

  // ── SUCCESS SCREEN ────────────────────────────────────────────────────────
  if (savedTransaction) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-[700px] mx-auto text-center"
      >
        <div className="glass-panel p-10 sm:p-14 rounded-3xl shadow-2xl border border-[var(--color-border-gold)] relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[var(--color-gold)] opacity-5 blur-[100px] pointer-events-none"></div>

          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-orange)] flex items-center justify-center mx-auto mb-6 text-black shadow-[0_0_30px_rgba(255,215,0,0.4)]">
            <CheckCircle2 size={40} className="drop-shadow-sm" />
          </div>
          <h2 className="font-h text-3xl font-black text-white mb-2">
            Transaction Saved!
          </h2>
          <div className="inline-block bg-[var(--color-gold-dim)] border border-[var(--color-border-gold)] rounded-xl px-6 py-2.5 mb-10 shadow-inner">
            <span className="font-mono text-xl font-bold text-[var(--color-gold)]">
              #{savedTransaction.transaction_id}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Sold Price', val: `₹${Number(savedTransaction.sold_price).toLocaleString('en-IN')}`, color: 'text-[var(--color-green)]' },
              { label: 'Cost Price', val: `₹${Number(savedTransaction.owner_price).toLocaleString('en-IN')}`, color: 'text-[var(--color-muted)]' },
              { label: 'Profit', val: `₹${Number(savedTransaction.profit).toLocaleString('en-IN')}`, color: profit >= 0 ? 'text-[var(--color-green)]' : 'text-[var(--color-red)]' },
            ].map(s => (
              <div key={s.label} className="bg-black/40 rounded-2xl p-5 border border-white/5 shadow-inner">
                <div className="text-[11px] text-[var(--color-muted)] uppercase tracking-wider font-bold mb-2">{s.label}</div>
                <div className={`text-xl sm:text-2xl font-black ${s.color}`}>{s.val}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <button className="btn btn-outline border-[var(--color-border)] hover:border-[var(--color-gold)] flex-col gap-3 py-5 rounded-xl group transition-all" onClick={() => generateCustomerPDF(savedTransaction)}>
              <FileText size={26} className="text-[var(--color-gold)] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-white">Customer PDF</span>
            </button>
            <button className="btn btn-outline border-[var(--color-border)] hover:border-[var(--color-orange)] flex-col gap-3 py-5 rounded-xl group transition-all" onClick={() => generateInternalPDF(savedTransaction)}>
              <FileOutput size={26} className="text-[var(--color-orange)] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-white">Internal PDF</span>
            </button>
            <button className="btn btn-outline border-[var(--color-border)] hover:border-[var(--color-green)] flex-col gap-3 py-5 rounded-xl group transition-all" onClick={() => exportToExcel([savedTransaction], savedTransaction.transaction_id)}>
              <Table size={26} className="text-[var(--color-green)] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-white">Export Excel</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-outline border-[var(--color-border)] hover:bg-white/5 px-8 py-3 rounded-xl" onClick={() => { setSavedTransaction(null); setStep(0); generateNextTransactionId().then(id => setValue('transaction_id', id)); }}>
              + New Transaction
            </button>
            <button className="btn btn-gold px-8 py-3 rounded-xl shadow-[0_4px_15px_rgba(255,215,0,0.2)]" onClick={onBack}>
              Back to Transactions
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  // ── STEP CONTENT ─────────────────────────────────────────────────────────
  const renderStep = () => {
    switch (step) {
      // ── STEP 0: Deal Info ─────────────────────────────────────────────────
      case 0:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field>
              <Label>Transaction ID</Label>
              <div className="w-full bg-black/40 border border-[var(--color-border)] rounded-xl py-3 px-4 text-lg font-mono font-bold text-[var(--color-gold)] shadow-inner flex items-center justify-between">
                <span>#{nextId}</span>
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-bold">Auto-Generated</span>
                <input type="hidden" {...register('transaction_id')} />
              </div>
            </Field>
            <Field>
              <Label>Transaction Date</Label>
              <input type="date" className={inputClasses} {...register('transaction_date', { required: true })} />
            </Field>
            <Field>
              <Label>Mode of Deal</Label>
              <div className="relative">
                <select className={selectClasses} {...register('mode_of_deal')}>
                  {['WhatsApp', 'Telegram', 'Instagram', 'Face to Face'].map(o => <option key={o} className="bg-[#111520]">{o}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[var(--color-muted)]"></div>
              </div>
            </Field>
            <Field>
              <Label>Mode of Payment</Label>
              <div className="relative">
                <select className={selectClasses} {...register('mode_of_payment')}>
                  {[
                    'Full Payment via UPI / Bank Transfer',
                    'Full Payment in Cash',
                    'Half Payment in UPI / Bank Transfer & Half in Cash',
                    'Easy Monthly Instalment (EMI)',
                  ].map(o => <option key={o} className="bg-[#111520]">{o}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[var(--color-muted)]"></div>
              </div>
            </Field>
            <Field>
              <Label>Payment Status</Label>
              <div className="relative">
                <select className={selectClasses} {...register('payment_status')}>
                  {['Fully Paid', 'Pending', 'Pending EMI'].map(o => <option key={o} className="bg-[#111520]">{o}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[var(--color-muted)]"></div>
              </div>
            </Field>
            <Field>
              <Label>Product / Listing Link</Label>
              <input className={inputClasses} placeholder="PlayerAuctions / Drive / Image link..." {...register('product_link')} />
            </Field>
          </div>
        );

      // ── STEP 1: Login Details ─────────────────────────────────────────────
      case 1:
        return (
          <div className="space-y-8">
            {/* Primary */}
            <div className="bg-black/20 border border-[var(--color-border-gold)] rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-gold)]"></div>
              <h4 className="text-[14px] uppercase text-[var(--color-gold)] font-bold tracking-widest mb-6 flex items-center gap-2">
                <Key size={16} /> Primary Login
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field>
                  <Label>Primary Login Provider</Label>
                  <div className="relative">
                    <select className={selectClasses} {...register('primary_login_provider')}>
                      {['Facebook', 'X (Twitter)', 'Google PlayGames', 'Apple ID', 'Game Center', 'WhatsApp'].map(o => <option key={o} className="bg-[#111520]">{o}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[var(--color-muted)]"></div>
                  </div>
                </Field>
                <Field>
                  <Label>Primary Mothermail Status</Label>
                  <div className="relative">
                    <select className={selectClasses} {...register('primary_mothermail_status')}>
                      {['Given To Customer', 'Not Given To Customer'].map(o => <option key={o} className="bg-[#111520]">{o}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[var(--color-muted)]"></div>
                  </div>
                </Field>
                <Field span>
                  <Label>Primary Login Credentials</Label>
                  <textarea className={`${inputClasses} min-h-[100px] resize-y font-mono text-sm`} rows={4} placeholder={"Email / Username\nPassword\nRecovery Details"} {...register('primary_credentials')} />
                </Field>
              </div>
            </div>

            {/* Secondary */}
            <div className="bg-black/20 border border-white/5 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-muted)]"></div>
              <h4 className="text-[14px] uppercase text-[var(--color-muted)] font-bold tracking-widest mb-6 flex items-center gap-2">
                <Link2 size={16} /> Secondary Login
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field>
                  <Label>Secondary Login Provider</Label>
                  <div className="relative">
                    <select className={selectClasses} {...register('secondary_login_provider')}>
                      {['Null (Single Login Only)', 'Facebook', 'X (Twitter)', 'Google PlayGames', 'Apple ID', 'Game Center', 'WhatsApp'].map(o => <option key={o} className="bg-[#111520]">{o}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[var(--color-muted)]"></div>
                  </div>
                </Field>
                <Field>
                  <Label>Secondary Mothermail Status</Label>
                  <div className="relative">
                    <select className={selectClasses} {...register('secondary_mothermail_status')}>
                      {['Given To Customer', 'Not Given To Customer'].map(o => <option key={o} className="bg-[#111520]">{o}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[var(--color-muted)]"></div>
                  </div>
                </Field>
                <Field span>
                  <Label>Secondary Login Credentials</Label>
                  <textarea className={`${inputClasses} min-h-[100px] resize-y font-mono text-sm`} rows={4} placeholder={"Email / Username\nPassword\nRecovery Details"} {...register('secondary_credentials')} />
                </Field>
              </div>
            </div>
          </div>
        );

      // ── STEP 2: Guarantee ─────────────────────────────────────────────────
      case 2:
       const guaranteePlan = watch('guarantee_plan');

       return (
         <div className="space-y-8">
           <Field span>
             <Label>Guarantee Plan</Label>
             <div className="relative">
               <select className={selectClasses} {...register('guarantee_plan')}>
                 {[
                   'Not Applicable',
                   '37 Days For Primary Login',
                   '22 Days For Primary Login',
                   '37 Days For Secondary Login',
                   '22 Days For Secondary Login',
                   '75 Days For Primary & Secondary Logins',
                 ].map(o => <option key={o} className="bg-[#111520]">{o}</option>)}
               </select>
               <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[var(--color-muted)]"></div>
             </div>
           </Field>

           {/* Primary Dates */}
           {guaranteePlan !== 'Not Applicable' && (
             <div className="bg-black/20 border border-[var(--color-border-gold)] rounded-2xl p-6 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-gold)]"></div>
               <h4 className="text-[14px] uppercase text-[var(--color-gold)] font-bold tracking-widest mb-6">Primary Login — Dates</h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <Field>
                   <Label>Primary Unlink Eligible Date</Label>
                   <input type="date" className={inputClasses} {...register('primary_unlink_date')} />
                 </Field>
                 <Field>
                   <Label>Primary Guarantee Void Date</Label>
                   <div className="flex flex-col gap-3">
                     <div className="relative">
                       <select className={selectClasses} {...register('primary_guarantee_void')}>
                         <option value="date" className="bg-[#111520]">Set a Date</option>
                         <option value="no_guarantee" className="bg-[#111520]">No Guarantee</option>
                       </select>
                       <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[var(--color-muted)]"></div>
                     </div>
                     {primaryVoid === 'date' && (
                       <motion.input initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} type="date" className={inputClasses} {...register('primary_guarantee_void_date')} />
                     )}
                   </div>
                 </Field>
               </div>
             </div>
           )}

           {/* Secondary Dates */}
           {guaranteePlan !== 'Not Applicable' && (
             <div className="bg-black/20 border border-white/5 rounded-2xl p-6 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-muted)]"></div>
               <h4 className="text-[14px] uppercase text-[var(--color-muted)] font-bold tracking-widest mb-6">Secondary Login — Dates</h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <Field>
                   <Label>Secondary Unlink Eligible Date</Label>
                   <input type="date" className={inputClasses} {...register('secondary_unlink_date')} />
                 </Field>
                 <Field>
                   <Label>Secondary Guarantee Void Date</Label>
                   <div className="flex flex-col gap-3">
                     <div className="relative">
                       <select className={selectClasses} {...register('secondary_guarantee_void')}>
                         <option value="date" className="bg-[#111520]">Set a Date</option>
                         <option value="no_guarantee" className="bg-[#111520]">No Guarantee</option>
                       </select>
                       <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[var(--color-muted)]"></div>
                     </div>
                     {secondaryVoid === 'date' && (
                       <motion.input initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} type="date" className={inputClasses} {...register('secondary_guarantee_void_date')} />
                     )}
                   </div>
                 </Field>
               </div>
             </div>
           )}
         </div>
       );


      // ── STEP 3: Financials ────────────────────────────────────────────────
      case 3:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field>
              <Label>Cost Price (₹)</Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 font-bold">₹</span>
                <input type="number" className={`${inputClasses} pl-8`} placeholder="0.00" {...register('owner_price')} />
              </div>
            </Field>
            <Field>
              <Label>Sold Price (₹)</Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 font-bold">₹</span>
                <input type="number" className={`${inputClasses} pl-8`} placeholder="0.00" {...register('sold_price')} />
              </div>
            </Field>
            <Field span>
              <Label>Net Profit (Auto-Calculated)</Label>
              <div className={`w-full border rounded-xl py-4 px-6 text-2xl font-black shadow-inner tracking-wide ${profit >= 0 ? 'bg-green-500/10 border-green-500/30 text-[var(--color-green)]' : 'bg-red-500/10 border-red-500/30 text-[var(--color-red)]'}`}>
                ₹ {profit.toLocaleString('en-IN')} {profit >= 0 ? '▲' : '▼'}
              </div>
            </Field>
          </div>
        );

      // ── STEP 4: Contacts ──────────────────────────────────────────────────
      case 4:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { label: 'Account Owner Phone', key: 'owner_phone' },
              { label: 'Seller Phone Number', key: 'seller_phone' },
              { label: 'Reseller Phone Number', key: 'reseller_phone' },
              { label: 'Buyer Phone Number', key: 'buyer_phone' },
            ].map(({ label, key }) => {
              const prefix = countryCodes[key] || '+91';
              const prefixLen = prefix.length;
              return (
                <Field key={key}>
                  <Label>{label}</Label>
                  <div className="flex items-center gap-2">
                    {/* Country Code Dropdown */}
                    <div className="relative w-24">
                      <select
                        {...register(`${key}_countryCode`, {
                          onChange: (e) => {
                            const newPrefix = e.target.value;
                            const currentPhone = watch(key) || '';
                            const restDigits = currentPhone.replace(/^\+(91|1|44)/, '');
                            setValue(key, newPrefix + restDigits);
                          }
                        })}
                        className={`${selectClasses} px-3 text-center`}
                      >
                        <option value="+91" className="bg-[#111520]">+91</option>
                        <option value="+1" className="bg-[#111520]">+1</option>
                        <option value="+44" className="bg-[#111520]">+44</option>
                      </select>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-[var(--color-muted)]"></div>
                    </div>

                    {/* Phone Number Input with Dynamic Locked prefix */}
                    <input
                      className={`${inputClasses} flex-1`}
                      placeholder="98765 09876"
                      maxLength={prefixLen + 10}
                      onKeyDown={(e) => {
                        const selectionStart = e.target.selectionStart;
                        if (e.key === 'Backspace' && selectionStart <= prefixLen) {
                          e.preventDefault();
                        }
                        if (e.key === 'Delete' && selectionStart < prefixLen) {
                          e.preventDefault();
                        }
                      }}
                      {...register(key, {
                        required: false,
                        onChange: (e) => {
                          let val = e.target.value;
                          if (!val.startsWith(prefix)) {
                            val = prefix + val.replace(/^\+?[0-9]*/, '');
                          }
                          const rest = val.substring(prefixLen).replace(/[^0-9]/g, '');
                          val = prefix + rest;
                          if (val.length > prefixLen + 10) {
                            val = val.substring(0, prefixLen + 10);
                          }
                          e.target.value = val;
                          setValue(key, val);
                        },
                        validate: (val) => {
                          if (!val || val === prefix) return true;
                          const rest = val.substring(prefixLen);
                          if (rest.length === 0) return true;
                          if (rest.length === 10 && /^[0-9]+$/.test(rest)) return true;
                          return `Enter a valid 10-digit number starting with ${prefix}`;
                        }
                      })}
                    />
                  </div>
                  {errors[key] && (
                    <p className="text-[var(--color-red)] text-[11px] font-bold mt-1.5 ml-1">
                      {errors[key].message || 'This field is required'}
                    </p>
                  )}
                </Field>
              );
            })}
            <Field span>
              <Label>Account Owner Proof Link (Drive / Screenshot)</Label>
              <input
                className={inputClasses}
                placeholder="https://drive.google.com/..."
                {...register('owner_proof_link')}
              />
            </Field>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-[900px] mx-auto flex flex-col gap-8">
      {/* Back */}
      <button onClick={onBack} className="btn btn-outline border-[var(--color-border)] text-[var(--color-muted)] hover:text-white hover:border-[var(--color-gold)] w-fit px-5 py-2.5 text-xs flex items-center gap-2 transition-all">
        <ArrowLeft size={16} /> Back to Transactions
      </button>

      {/* Header card */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[var(--color-border-gold)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div>
          <h2 className="font-h text-2xl font-bold text-white mb-1">
            New Account Transaction
          </h2>
          <p className="text-[var(--color-muted)] text-[13px] font-medium">BGMI Account Sale — Step {step + 1} of {STEPS.length}</p>
        </div>
        <div className="font-mono text-xl font-bold text-[var(--color-gold)] bg-[var(--color-gold-dim)] px-5 py-2 rounded-xl border border-[var(--color-border-gold)] shadow-inner">
          #{nextId}
        </div>
      </div>

      {/* Step Navigator */}
      <div className="flex flex-col sm:flex-row bg-[#0b0e14] rounded-2xl border border-[var(--color-border-gold)] overflow-hidden shadow-lg">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const isActive = step === i;
          const isDone = step > i;
          return (
            <button
              key={s.id}
              onClick={() => setStep(i)}
              className={`flex-1 p-4 flex flex-col items-center gap-1.5 transition-all cursor-pointer ${isActive ? 'bg-[var(--color-gold-dim)] border-b-2 border-b-[var(--color-gold)]' : 'bg-transparent border-b-2 border-b-transparent hover:bg-white/5'} ${i < STEPS.length - 1 ? 'sm:border-r border-r-[var(--color-border-gold)]' : ''}`}
            >
              <Icon size={18} className={isDone ? 'text-[var(--color-green)]' : isActive ? 'text-[var(--color-gold)]' : 'text-[var(--color-muted)]'} />
              <span className={`text-[11px] font-bold tracking-wider uppercase ${isDone ? 'text-[var(--color-green)]' : isActive ? 'text-[var(--color-gold)]' : 'text-[var(--color-muted)]'}`}>
                {isDone ? '✓ ' : ''}{s.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Form card */}
      <form onKeyDown={(e) => { if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') e.preventDefault(); }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/5 shadow-xl"
          >
            <h3 className="text-lg font-bold text-white mb-8 pb-4 border-b border-[var(--color-border)] flex items-center gap-3">
              <span className="p-2 rounded-lg bg-[var(--color-gold-dim)]">
                {React.createElement(STEPS[step].icon, { size: 20, className: "text-[var(--color-gold)]" })}
              </span>
              {STEPS[step].label}
            </h3>
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-6 pt-4 px-2">
          <button
            type="button"
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
            className={`btn btn-outline border-[var(--color-border)] text-white px-6 py-3 flex items-center gap-2 ${step === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/5'}`}
          >
            <ChevronLeft size={18} /> Previous
          </button>

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={() => setStep(s => Math.min(STEPS.length - 1, s + 1))}
              className="btn btn-gold px-8 py-3 flex items-center gap-2 shadow-[0_4px_15px_rgba(255,215,0,0.2)]"
            >
              Next Step <ChevronRight size={18} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting || !canSubmit}
              className={`btn btn-gold px-8 py-3 flex items-center gap-2 shadow-[0_4px_15px_rgba(255,215,0,0.2)] ${(!canSubmit && !isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <><span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin inline-block" /> Saving...</>
              ) : (
                <><Save size={18} /> Save Transaction</>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
