/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import {
  LayoutDashboard, Gamepad2, Star, MessageSquare, Link2, CreditCard,
  Settings, Plus, Edit, Trash2, Check, X, ShieldAlert,
  Loader2, RefreshCw, MessageCircle, Copy,
  TrendingUp, Users, Zap, Camera, Key, User,
  Menu, Coins, Gift, Car, FileCheck, History, Mail, Crown, Gem,
  Clock, Lock, AlertCircle, XCircle, CheckCircle, Slash, Tag,
  Sparkles, Flame, PlusCircle, Award, Timer, BadgeCheck, Trophy, Target,
  ShieldCheck, Archive
} from "lucide-react";

import {
  getAdminMetrics,
  getAdminProducts, createProduct, updateProduct, deleteProduct,
  getAdminReviews, updateReviewStatus, deleteReview,
  getFeedbackLogs, updateFeedbackStatus,
  getPaymentLinks, createPaymentLink, revokePaymentLink,
  getTransactionsRegistry,
  getAdminActivityLogs, getActiveAdmins, addAdmin, revokeAdmin,
  getUcPacks, createUcPack, deleteUcPack,
  getXsuitGifts, createXsuitGift, deleteXsuitGift,
  getSupercars, createSupercar, deleteSupercar,
  getProofs, createProof, deleteProof
} from "./actions";

type ActiveTab = 
  | "accounts"
  | "description_factory"
  | "uc_packs"
  | "xsuit_gifts"
  | "cars"
  | "reviews"
  | "proofs"
  | "payments"
  | "customer_feedback"
  | "activity_log"
  | "admin_controls"
  | "dashboard";

const SIDEBAR_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "accounts", label: "Accounts", icon: Gamepad2 },
  { id: "description_factory", label: "Description Factory", icon: Zap },
  { id: "uc_packs", label: "UC Packs", icon: Coins },
  { id: "xsuit_gifts", label: "Xsuit Gifts", icon: Gift },
  { id: "cars", label: "Cars", icon: Car },
  { id: "reviews", label: "Reviews", icon: Star },
  { id: "proofs", label: "Proofs", icon: FileCheck },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "customer_feedback", label: "Customer Feedback", icon: MessageSquare },
  { id: "activity_log", label: "Activity Log", icon: History },
  { id: "admin_controls", label: "Admin Controls", icon: Settings },
];

const WhatsAppLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const FacebookLogo = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
  </svg>
);

const XLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const AppleLogo = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M17.05 13.605c-.015-2.42 1.974-3.574 2.064-3.626-1.125-1.645-2.875-1.87-3.51-1.902-1.503-.153-2.93.882-3.693.882-.764 0-1.94-.85-3.18-.828-1.614.022-3.107.937-3.935 2.378-1.678 2.91-.428 7.217 1.205 9.584.795 1.157 1.733 2.455 2.983 2.408 1.198-.047 1.666-.77 3.11-.77 1.444 0 1.884.77 3.134.747 1.272-.02 2.08-1.18 2.868-2.34 1.002-1.465 1.415-2.88 1.434-2.955-.03-.013-2.673-1.025-2.68-3.582M15.42 5.48c.646-.78 1.08-1.865.96-2.95-.928.037-2.05.62-2.71 1.402-.53.618-1.045 1.72-.907 2.785.105.008.22.015.334.015.864 0 1.66-.465 2.323-1.252"/>
  </svg>
);

const GameCenterLogo = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <circle cx="8" cy="9" r="4.5" fill="#FF3B30" opacity="0.85" />
    <circle cx="16" cy="9" r="4.5" fill="#007AFF" opacity="0.85" />
    <circle cx="8" cy="15" r="4.5" fill="#4CD964" opacity="0.85" />
    <circle cx="16" cy="15" r="4.5" fill="#FFCC00" opacity="0.85" />
    <circle cx="12" cy="12" r="4" fill="#5856D6" opacity="0.85" />
  </svg>
);

const PRIMARY_LOGIN_OPTIONS = [
  { value: "X", label: "X / Twitter", icon: XLogo, color: "#fff", bg: "rgba(255,255,255,0.05)" },
  { value: "Facebook", label: "Facebook", icon: FacebookLogo, color: "#4A9FFF", bg: "rgba(24,119,242,0.1)" },
  { value: "Google Playgames", label: "Google Playgames", icon: (props: any) => <Gamepad2 {...props} size={16} />, color: "#34A853", bg: "rgba(52,168,83,0.1)" },
  { value: "Whats app", label: "Whats app", icon: WhatsAppLogo, color: "#25D366", bg: "rgba(37,211,102,0.1)" },
  { value: "Apple ID", label: "Apple ID", icon: AppleLogo, color: "#fff", bg: "rgba(255,255,255,0.05)" },
  { value: "Game Center", label: "Game Center", icon: GameCenterLogo, color: "#00A3FF", bg: "rgba(0,163,255,0.1)" }
];

const SECONDARY_LOGIN_OPTIONS = [
  { value: "None", label: "No Login", icon: (props: any) => <X {...props} size={16} />, color: "#8b949e", bg: "rgba(255,255,255,0.05)" },
  ...PRIMARY_LOGIN_OPTIONS
];

const CATEGORY_OPTIONS = [
  { value: "Budget", label: "Budget", icon: Coins },
  { value: "Mid Range", label: "Mid Range", icon: TrendingUp },
  { value: "Premium", label: "Premium", icon: Crown },
  { value: "Ultra Premium", label: "Ultra Premium", icon: Gem }
];

const STATUS_OPTIONS = [
  { value: "available", label: "Available", icon: CheckCircle, color: "#4ade80", bg: "rgba(74,222,128,0.1)" },
  { value: "coming_soon", label: "Coming Soon", icon: Clock, color: "#60a5fa", bg: "rgba(96,165,250,0.1)" },
  { value: "reserved", label: "Reserved", icon: Lock, color: "#c084fc", bg: "rgba(192,132,252,0.1)" },
  { value: "on_hold", label: "On Hold", icon: AlertCircle, color: "#fb923c", bg: "rgba(251,146,60,0.1)" },
  { value: "sold", label: "Sold", icon: XCircle, color: "#f87171", bg: "rgba(248,113,113,0.1)" },
  { value: "ready_to_exchange", label: "Ready to Exchange", icon: RefreshCw, color: "#22d3ee", bg: "rgba(34,211,238,0.1)" }
];

const PROMO_TAG_OPTIONS = [
  { value: "None", label: "No Tag", icon: Slash, color: "#8b949e", bg: "rgba(255,255,255,0.05)" },
  { value: "Deal of the Day", label: "Deal of the Day", icon: Tag, color: "#ff4757", bg: "rgba(255,71,87,0.1)" },
  { value: "Ultra Premium", label: "Ultra Premium", icon: Sparkles, color: "#ffb8b8", bg: "rgba(255,184,184,0.1)" },
  { value: "Hot", label: "Hot", icon: Flame, color: "#ff6b81", bg: "rgba(255,107,129,0.1)" },
  { value: "Trending", label: "Trending", icon: TrendingUp, color: "#ffa502", bg: "rgba(255,165,2,0.1)" },
  { value: "New Arrival", label: "New Arrival", icon: PlusCircle, color: "#2ed573", bg: "rgba(46,213,115,0.1)" },
  { value: "Rare Collection", label: "Rare Collection", icon: Award, color: "#eccc68", bg: "rgba(236,204,104,0.1)" },
  { value: "Limited Stock", label: "Limited Stock", icon: Timer, color: "#ff7f50", bg: "rgba(255,127,80,0.1)" },
  { value: "Best Seller", label: "Best Seller", icon: BadgeCheck, color: "#70a1ff", bg: "rgba(112,161,255,0.1)" },
  { value: "Pro Collector", label: "Pro Collector", icon: Gamepad2, color: "#1e90ff", bg: "rgba(30,144,255,0.1)" },
  { value: "Triple Conqueror", label: "Triple Conqueror", icon: Trophy, color: "#ffa502", bg: "rgba(255,165,2,0.1)" },
  { value: "Bgmi Partner", label: "Bgmi Partner", icon: Users, color: "#2ed573", bg: "rgba(46,213,115,0.1)" },
  { value: "Top 100", label: "Top 100", icon: Target, color: "#ff4757", bg: "rgba(255,71,87,0.1)" },
  { value: "High Value", label: "High Value", icon: Coins, color: "#ffd700", bg: "rgba(255,215,0,0.1)" },
  { value: "Exclusive", label: "Exclusive", icon: ShieldCheck, color: "#c084fc", bg: "rgba(192,132,252,0.1)" },
  { value: "Premium Inventory", label: "Premium Inventory", icon: Archive, color: "#22d3ee", bg: "rgba(34,211,238,0.1)" },
  { value: "Supercar Collector", label: "Supercar Collector", icon: Car, color: "#ff6b81", bg: "rgba(255,107,129,0.1)" },
  { value: "Xsuit Collector", label: "Xsuit Collector", icon: Gift, color: "#ffa502", bg: "rgba(255,165,2,0.1)" },
  { value: "GunLabs Lover", label: "GunLabs Lover", icon: Zap, color: "#ffd700", bg: "rgba(255,215,0,0.1)" }
];

export default function AdminDashboard() {
  const { user, isLoaded } = useUser();

  // All hooks MUST be declared before any conditional returns (Rules of Hooks)
  const [activeTab, setActiveTab] = useState<ActiveTab>("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // States for DB data
  const [metrics, setMetrics] = useState<any>(null);
  const [productsList, setProductsList] = useState<any[]>([]);
  const [reviewsList, setReviewsList] = useState<any[]>([]);
  const [feedbackList, setFeedbackList] = useState<any[]>([]);
  const [paymentLinksList, setPaymentLinksList] = useState<any[]>([]);
  const [activityLogsList, setActivityLogsList] = useState<any[]>([]);
  const [activeAdminsList, setActiveAdminsList] = useState<any[]>([]);
  
  // New Catalog States
  const [ucPacksList, setUcPacksList] = useState<any[]>([]);
  const [xsuitsList, setXsuitsList] = useState<any[]>([]);
  const [supercarsList, setSupercarsList] = useState<any[]>([]);
  const [proofsList, setProofsList] = useState<any[]>([]);

  // Description Factory State
  const [rawDescription, setRawDescription] = useState("");
  const [parsedData, setParsedData] = useState({
    mythics: 0,
    xsuits: 0,
    guns: 0,
    vehicles: 0,
    level: "—",
    collector: 0,
    fashion: "0/100",
    ultimateFashion: 0,
    logins: "—"
  });

  // Refresh trigger
  const [refreshKey, setRefreshKey] = useState(0);

  // Compute admin status (client-side guard; middleware is the real enforcer)
  const isPermanentAdmin = user?.primaryEmailAddress?.emailAddress === "maddybgmistoreog@gmail.com";
  const userRole = (user?.publicMetadata?.role as string) || "USER";
  const isAdmin = isPermanentAdmin || ["SUPER_ADMIN", "ADMIN", "TRANSACTION_MANAGER", "CONTENT_MANAGER"].includes(userRole);

  // Load all dashboard data
  const loadDashboardData = async () => {
    if (!user || !isAdmin) return;
    setLoading(true);
    try {
      const [
        metricsRes,
        productsRes,
        reviewsRes,
        feedbackRes,
        payLinksRes,
        _txnRes,
        logsRes,
        adminsRes,
        ucRes,
        xsuitRes,
        supercarRes,
        proofsRes
      ] = await Promise.all([
        getAdminMetrics(),
        getAdminProducts(),
        getAdminReviews(),
        getFeedbackLogs(),
        getPaymentLinks(),
        getTransactionsRegistry(),
        getAdminActivityLogs(),
        getActiveAdmins(),
        getUcPacks(),
        getXsuitGifts(),
        getSupercars(),
        getProofs()
      ]);

      if (metricsRes.success) setMetrics(metricsRes.metrics);
      if (productsRes.success) setProductsList(productsRes.products || []);
      if (reviewsRes.success) setReviewsList(reviewsRes.reviews || []);
      if (feedbackRes.success) setFeedbackList(feedbackRes.feedback || []);
      if (payLinksRes.success) setPaymentLinksList(payLinksRes.paymentLinks || []);
      if (logsRes.success) setActivityLogsList(logsRes.logs || []);
      if (adminsRes.success) setActiveAdminsList(adminsRes.admins || []);
      if (ucRes.success) setUcPacksList(ucRes.ucPacks || []);
      if (xsuitRes.success) setXsuitsList(xsuitRes.xsuitGifts || []);
      if (supercarRes.success) setSupercarsList(supercarRes.supercars || []);
      if (proofsRes.success) setProofsList(proofsRes.proofs || []);
    } catch (_err) {
      console.error("Failed to load dashboard details:", _err);
      toast.error("Failed to sync some dashboard items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoaded && user && isAdmin) {
      loadDashboardData();
    }
  }, [refreshKey, isLoaded, user, isAdmin]);

  const triggerRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  // --- STOCKS FORM STATE ---
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [productForm, setProductForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "Budget",
    status: "available",
    youtubeUrl: "",
    primaryLogin: "Facebook",
    secondaryLogin: "None (Single Login)",
    unlinkGuarantee: "Not Applicable",
    tag: "None",
    imageUrls: [] as string[]
  });

  const resetProductForm = () => {
    setProductForm({
      title: "",
      description: "",
      price: "",
      category: "Budget",
      status: "available",
      youtubeUrl: "",
      primaryLogin: "Facebook",
      secondaryLogin: "None (Single Login)",
      unlinkGuarantee: "Not Applicable",
      tag: "None",
      imageUrls: []
    });
    setEditingProduct(null);
  };

  // --- CATALOG FORMS ---
  const [ucPackForm, setUcPackForm] = useState({ ucAmount: "", marketPrice: "", offerPrice: "", bonusUc: "", method: "view_login", tag: "None" });
  const [xsuitForm, setXsuitForm] = useState({ name: "", price: "", imageUrl: "", tag: "None" });
  const [supercarForm, setSupercarForm] = useState({ name: "", price: "", type: "Sports", imageUrl: "", tag: "None" });
  const [proofForm, setProofForm] = useState({ title: "", imageUrl: "", month: "", year: "" });

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.title || !productForm.price) {
      toast.error("Title and price are required");
      return;
    }

    try {
      if (editingProduct) {
        const res = await updateProduct(editingProduct.id, productForm);
        if (res.success) {
          toast.success("Product updated successfully!");
          resetProductForm();
          triggerRefresh();
        } else {
          toast.error("Failed to update product");
        }
      } else {
        const res = await createProduct(productForm);
        if (res.success) {
          toast.success("Product created successfully!");
          resetProductForm();
          triggerRefresh();
        } else {
          toast.error(res.error || "Failed to create product");
        }
      }
    } catch (_err) {
      toast.error("Failed to submit product form");
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product listing?")) return;
    try {
      const res = await deleteProduct(id);
      if (res.success) {
        toast.success("Product deleted successfully");
        triggerRefresh();
      } else {
        toast.error("Failed to delete product");
      }
    } catch (_err) {
      toast.error("Error deleting product");
    }
  };

  // --- REVIEWS MODERATION HANDLERS ---
  const handleReviewStatus = async (id: string, status: string) => {
    try {
      const res = await updateReviewStatus(id, status);
      if (res.success) {
        toast.success(`Review ${status} successfully`);
        triggerRefresh();
      } else {
        toast.error("Failed to update review");
      }
    } catch (_err) {
      toast.error("Error updating review");
    }
  };

  const handleDeleteReview = async (id: string) => {
    if (!confirm("Delete this review forever?")) return;
    try {
      const res = await deleteReview(id);
      if (res.success) {
        toast.success("Review deleted successfully");
        triggerRefresh();
      } else {
        toast.error("Failed to delete review");
      }
    } catch (_err) {
      toast.error("Error deleting review");
    }
  };

  // --- FEEDBACK HANDLERS ---
  const handleFeedbackStatus = async (id: string, status: string) => {
    try {
      const res = await updateFeedbackStatus(id, status);
      if (res.success) {
        toast.success(`Feedback marked as ${status}`);
        triggerRefresh();
      } else {
        toast.error("Failed to update feedback");
      }
    } catch (_err) {
      toast.error("Error updating feedback");
    }
  };

  // --- CATALOG HANDLERS ---
  const handleUcPackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await createUcPack({
        ucAmount: parseInt(ucPackForm.ucAmount.replace(/,/g, '')),
        offerPrice: ucPackForm.offerPrice.replace(/,/g, ''),
        marketPrice: ucPackForm.marketPrice ? ucPackForm.marketPrice.replace(/,/g, '') : undefined,
        bonusUc: ucPackForm.bonusUc ? parseInt(ucPackForm.bonusUc.replace(/,/g, '')) : 0,
        method: ucPackForm.method,
        tag: ucPackForm.tag
      });
      if (res.success) {
        toast.success("UC Pack added successfully!");
        setUcPackForm({ ucAmount: "", marketPrice: "", offerPrice: "", bonusUc: "", method: "view_login", tag: "None" });
        triggerRefresh();
      } else toast.error(res.error || "Failed to add UC Pack");
    } catch (_err) { toast.error("Error adding UC Pack"); }
  };

  const handleDeleteUcPack = async (id: string) => {
    if (!confirm("Delete this UC Pack?")) return;
    try {
      const res = await deleteUcPack(id);
      if (res.success) { toast.success("UC Pack deleted"); triggerRefresh(); }
      else toast.error("Failed to delete UC Pack");
    } catch (_err) { toast.error("Error deleting UC Pack"); }
  };

  const handleXsuitSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await createXsuitGift({
        name: xsuitForm.name,
        price: xsuitForm.price.replace(/,/g, ''),
        imageUrl: xsuitForm.imageUrl,
        tag: xsuitForm.tag
      });
      if (res.success) {
        toast.success("X-Suit Gift added successfully!");
        setXsuitForm({ name: "", price: "", imageUrl: "", tag: "None" });
        triggerRefresh();
      } else toast.error(res.error || "Failed to add X-Suit Gift");
    } catch (_err) { toast.error("Error adding X-Suit Gift"); }
  };

  const handleDeleteXsuit = async (id: string) => {
    if (!confirm("Delete this X-Suit Gift?")) return;
    try {
      const res = await deleteXsuitGift(id);
      if (res.success) { toast.success("X-Suit deleted"); triggerRefresh(); }
      else toast.error("Failed to delete X-Suit");
    } catch (_err) { toast.error("Error deleting X-Suit"); }
  };

  const handleSupercarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await createSupercar({
        name: supercarForm.name,
        price: supercarForm.price.replace(/,/g, ''),
        type: supercarForm.type,
        imageUrl: supercarForm.imageUrl,
        tag: supercarForm.tag
      });
      if (res.success) {
        toast.success("Supercar Gift added successfully!");
        setSupercarForm({ name: "", price: "", type: "Sports", imageUrl: "", tag: "None" });
        triggerRefresh();
      } else toast.error(res.error || "Failed to add Supercar Gift");
    } catch (_err) { toast.error("Error adding Supercar Gift"); }
  };

  const handleDeleteSupercar = async (id: string) => {
    if (!confirm("Delete this Supercar Gift?")) return;
    try {
      const res = await deleteSupercar(id);
      if (res.success) { toast.success("Supercar deleted"); triggerRefresh(); }
      else toast.error("Failed to delete Supercar");
    } catch (_err) { toast.error("Error deleting Supercar"); }
  };

  const handleProofSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await createProof(proofForm);
      if (res.success) {
        toast.success("Proof added successfully!");
        setProofForm({ title: "", imageUrl: "", month: "", year: "" });
        triggerRefresh();
      } else toast.error(res.error || "Failed to add Proof");
    } catch (_err) { toast.error("Error adding Proof"); }
  };

  const handleDeleteProof = async (id: string) => {
    if (!confirm("Delete this Proof?")) return;
    try {
      const res = await deleteProof(id);
      if (res.success) { toast.success("Proof deleted"); triggerRefresh(); }
      else toast.error("Failed to delete Proof");
    } catch (_err) { toast.error("Error deleting Proof"); }
  };

  // --- PAYMENT LINKS GENERATOR ---
  const [payLinkForm, setPayLinkForm] = useState({
    customerName: "",
    amount: "",
    note: "",
    pin: "",
    expiresHours: 24
  });

  const handleCreatePayLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!payLinkForm.customerName || !payLinkForm.amount) {
      toast.error("Name and amount are required");
      return;
    }

    try {
      const pinVal = payLinkForm.pin || Math.floor(100000 + Math.random() * 900000).toString();
      const res = await createPaymentLink({
        customerName: payLinkForm.customerName,
        amount: payLinkForm.amount,
        note: payLinkForm.note,
        pin: pinVal,
        expiresHours: Number(payLinkForm.expiresHours)
      });

      if (res.success && res.paymentLink) {
        toast.success("Payment Link Generated!");
        setPayLinkForm({
          customerName: "",
          amount: "",
          note: "",
          pin: "",
          expiresHours: 24
        });
        triggerRefresh();
      } else {
        toast.error("Failed to generate payment link");
      }
    } catch (_err) {
      toast.error("Error creating payment link");
    }
  };

  const handleRevokePayLink = async (id: string) => {
    if (!confirm("Are you sure you want to revoke this active checkout gateway?")) return;
    try {
      const res = await revokePaymentLink(id);
      if (res.success) {
        toast.success("Payment gateway link revoked");
        triggerRefresh();
      } else {
        toast.error("Failed to revoke link");
      }
    } catch (_err) {
      toast.error("Error revoking link");
    }
  };

  const copyPayLinkCheckout = (id: string) => {
    const url = `https://maddybgmistore.in/pay/${id}`;
    navigator.clipboard.writeText(url).then(() => {
      toast.success("Checkout link copied to clipboard!");
    });
  };

  // --- GLOBAL SETTINGS ---
  // Unused state hooks (txnForm, settingsForm) removed to resolve ESLint warnings

  // --- ADMIN CONTROLS HANDLERS ---
  const [newAdminEmail, setNewAdminEmail] = useState("");

  const handleAddAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAdminEmail) return;
    try {
      const res = await addAdmin(newAdminEmail);
      if (res.success) {
        toast.success("Admin authorized successfully");
        setNewAdminEmail("");
        triggerRefresh();
      } else {
        toast.error(res.error || "Failed to add admin");
      }
    } catch (_err) {
      toast.error("Error adding admin");
    }
  };

  const handleRevokeAdmin = async (id: string) => {
    if (!confirm("Are you sure you want to revoke this user's admin access?")) return;
    try {
      const res = await revokeAdmin(id);
      if (res.success) {
        toast.success("Admin access revoked");
        triggerRefresh();
      } else {
        toast.error(res.error || "Failed to revoke admin");
      }
    } catch (_err) {
      toast.error("Error revoking admin");
    }
  };

  // Description Factory Parser
  useEffect(() => {
    const text = rawDescription.toLowerCase();
    
    // Naive parsing logic
    let mythics = 0;
    let xsuits = 0;
    let guns = 0;
    let vehicles = 0;
    
    // Parse mythics
    const mythicMatch = text.match(/(\d+)\s*mythic/);
    if (mythicMatch && mythicMatch[1]) mythics = parseInt(mythicMatch[1]);
    
    // Parse xsuits
    const xsuitMatches = text.match(/xsuit/g);
    if (xsuitMatches) xsuits = xsuitMatches.length;
    
    // Parse guns
    const gunMatch = text.match(/(\d+)\s*(gun|lab)/);
    if (gunMatch && gunMatch[1]) guns = parseInt(gunMatch[1]);
    
    // Parse vehicles
    const vehicleMatch = text.match(/(\d+)\s*(supercar|vehicle)/);
    if (vehicleMatch && vehicleMatch[1]) vehicles = parseInt(vehicleMatch[1]);

    // Parse level
    let level = "—";
    const levelMatch = text.match(/level\s*(\d+)/);
    if (levelMatch && levelMatch[1]) level = levelMatch[1];

    // Parse collector
    let collector = 0;
    const collectorMatch = text.match(/collector\s*(\d+)/);
    if (collectorMatch && collectorMatch[1]) collector = parseInt(collectorMatch[1]);
    
    setParsedData({
      mythics,
      xsuits,
      guns,
      vehicles,
      level,
      collector,
      fashion: mythics > 0 ? `${mythics}/100` : "0/100",
      ultimateFashion: 0,
      logins: "—"
    });
  }, [rawDescription]);


  // Unused handleSettingsSubmit removed to resolve ESLint warning

  // While Clerk is loading, show spinner
  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg">
        <Loader2 size={36} className="animate-spin text-gold" />
      </div>
    );
  }

  // Not logged in at all
  if (!user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bg text-white font-sans">
        <ShieldAlert size={48} className="text-gold" />
        <h1 className="font-h text-2xl font-black">Authentication Required</h1>
        <p className="text-sm text-muted font-mono">Please sign in to access the Admin Panel.</p>
        <Link href="/login" className="btn btn-gold px-6 py-2.5 text-sm">Sign In</Link>
      </div>
    );
  }

  // Logged in but not an admin
  if (!isAdmin) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bg text-white font-sans">
        <ShieldAlert size={48} className="text-red-500" />
        <h1 className="font-h text-2xl font-black text-red-400">Access Denied</h1>
        <p className="text-sm text-muted font-mono">You do not have administrative privileges to view this page.</p>
        <Link href="/" className="btn btn-outline px-6 py-2.5 text-sm">← Return Home</Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-bg text-[#eaeaea] font-sans overflow-hidden">
      
      {/* Sidebar Overlay Backdrop on Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR SECTION */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 glass-panel border-r border-white/5 flex flex-col transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}>
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <div className="leading-tight">
            <span className="font-h font-black tracking-wide text-2xl text-white flex items-center gap-2">
              Admin <span className="text-gold">Panel</span>
            </span>
            <span className="text-[10px] text-muted uppercase tracking-widest font-bold mt-1 block">
              Core Workspace
            </span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-muted hover:text-white hover:bg-white/5 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scrollbar-thin">
          {SIDEBAR_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id as ActiveTab);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-[13.5px] font-bold tracking-wide ${active ? 'bg-gold-dim text-gold shadow-inner' : 'text-muted hover:bg-white/5 hover:text-white'}`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="p-6 border-t border-white/5 flex flex-col gap-3">

          <div className="w-full flex items-center justify-between bg-black/20 p-2 rounded-lg border border-white/5">
            <UserButton afterSignOutUrl="/login" />
            <span className="text-[10px] text-muted font-bold">LOGGED IN</span>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT WORKSPACE */}
      <main className="flex-1 flex flex-col min-w-0 h-screen relative">
        
        {/* Sticky Header */}
        <header className="h-20 shrink-0 border-b border-white/5 glass-panel sticky top-0 z-30 flex items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
            >
              <Menu size={24} />
            </button>
            <h2 className="font-h font-bold text-lg lg:text-xl tracking-wide flex items-center gap-2 text-white">
              {SIDEBAR_ITEMS.find(i => i.id === activeTab)?.icon && React.createElement(SIDEBAR_ITEMS.find(i => i.id === activeTab)!.icon, { size: 20, className: "text-gold" })}
              {SIDEBAR_ITEMS.find(i => i.id === activeTab)?.label || "Dashboard"}
            </h2>
          </div>
          <button 
            onClick={triggerRefresh} 
            className="flex items-center gap-2 p-2 px-4 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition font-bold text-xs uppercase tracking-wider"
          >
            <RefreshCw size={14} /> <span className="hidden sm:inline">Refresh</span>
          </button>
        </header>

        {/* CONTAINER SCROLL */}
        <div className="flex-1 p-6 lg:p-10 overflow-y-auto scrollbar-thin">
          {loading && !metrics ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <Loader2 size={36} className="animate-spin text-gold" />
              <p className="text-sm text-muted font-mono uppercase tracking-widest">Hydrating dashboard workspaces...</p>
            </div>
          ) : (
            <>
              {/* ==============================================================
                  TAB: DASHBOARD
                  ============================================================== */}
              {activeTab === "dashboard" && metrics && (
                <div className="flex flex-col gap-8">
                  {/* METRICS ROW */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-panel border border-gold/20 shadow-[0_0_15px_rgba(255,215,0,0.05)] rounded-2xl p-6 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 opacity-10"><TrendingUp size={80} className="text-gold" /></div>
                      <span className="text-[10px] font-bold text-gold uppercase tracking-wider block mb-1">Total Sales Revenue</span>
                      <strong className="text-4xl font-h font-black text-white">₹{Number(metrics.analytics.revenue).toLocaleString("en-IN")}</strong>
                      <span className="text-xs text-muted block mt-2 font-mono">Mapped from logged transactions</span>
                    </div>

                    <div className="glass-panel border border-green-500/20 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 opacity-10"><Users size={80} className="text-green-500" /></div>
                      <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider block mb-1">Total Profit</span>
                      <strong className="text-4xl font-h font-black text-white">₹{Number(metrics.analytics.profit).toLocaleString("en-IN")}</strong>
                      <span className="text-xs text-muted block mt-2 font-mono">Difference of owner vs sold price</span>
                    </div>

                    <div className="glass-panel border border-blue-500/20 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 opacity-10"><LayoutDashboard size={80} className="text-blue-500" /></div>
                      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block mb-1">Counter Site Views</span>
                      <strong className="text-4xl font-h font-black text-white">{metrics.totalViews.toLocaleString()}</strong>
                      <span className="text-xs text-muted block mt-2 font-mono">Live counter tracked on public portal</span>
                    </div>
                  </div>

                  {/* SECONDARY STATS */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                      { label: "Available Stocks", val: `${metrics.products.available} / ${metrics.products.total}`, desc: "Active ready stocks listing" },
                      { label: "Pending Reviews", val: metrics.reviews.pending, desc: "Awaiting AI/Manual approval", highlight: metrics.reviews.pending > 0 },
                      { label: "Unread Feedback", val: metrics.feedback.unread, desc: "Awaiting administrator response", highlight: metrics.feedback.unread > 0 },
                      { label: "Total Handover Logs", val: metrics.analytics.count, desc: "Manual transaction counts" }
                    ].map((stat, idx) => (
                      <div key={idx} className={`glass-panel rounded-2xl p-6 shadow-md ${stat.highlight ? "border-orange-500/30 bg-orange-500/2" : ""}`}>
                        <span className="text-[10px] font-bold text-muted uppercase tracking-wider block mb-1">{stat.label}</span>
                        <strong className="text-2xl font-h font-extrabold text-white block">{stat.val}</strong>
                        <span className="text-xs text-muted block mt-1">{stat.desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* QUICK TIPS PANEL */}
                  <div className="bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border border-gold/20 shadow-[0_0_15px_rgba(255,215,0,0.05)] rounded-2xl p-6 flex gap-4 items-start">
                    <ShieldAlert className="text-gold shrink-0" size={24} />
                    <div>
                      <h4 className="font-h font-bold text-white uppercase text-sm tracking-wider mb-1">Administrator Safety Protocol</h4>
                      <p className="text-xs text-muted leading-relaxed">
                        Secure transaction settings and PIN codes are active. Never share payment links PINs with third parties.
                        When adding new accounts in Ready Stocks, upload high-quality catalog images. Formatted broadcast scripts can be shared on WhatsApp and Telegram channels directly from the Broadcast Maker tab.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ==============================================================
                  TAB: ACCOUNTS
                  ============================================================== */}
              {activeTab === "accounts" && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* ADD PRODUCT FORM */}
                  <div className="lg:col-span-1 glass-panel rounded-2xl p-6 shadow-xl h-fit">
                    <div className="flex items-center gap-2 mb-6 text-gold font-bold tracking-wider font-h">
                      {editingProduct ? <Edit size={16} /> : <Plus size={16} />}
                      {editingProduct ? "Edit Product" : "Add Product"}
                    </div>
                    <form onSubmit={handleProductSubmit} className="flex flex-col gap-4">
                      <div>
                        <input type="text" value={productForm.youtubeUrl || ""} onChange={e => setProductForm({ ...productForm, youtubeUrl: e.target.value })} placeholder="YouTube Video URL" className="input-field" />
                      </div>
                      <div>
                        <input type="text" value={productForm.title} onChange={e => setProductForm({ ...productForm, title: e.target.value })} required placeholder="Account Title (e.g. M416 Maxed 60K UC)" className="input-field" />
                      </div>
                      <div>
                        <textarea value={productForm.description} onChange={e => setProductForm({ ...productForm, description: e.target.value })} placeholder="Account Description (items, skins, levels...)" rows={4} className="input-field resize-none" />
                      </div>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">Listing Price (₹)</label>
                        <div className="relative flex items-center">
                          <span className="absolute left-4 text-gold font-bold text-sm pointer-events-none select-none">₹</span>
                          <input 
                            type="number" 
                            required 
                            value={productForm.price} 
                            onChange={e => setProductForm({ ...productForm, price: e.target.value })} 
                            placeholder="0" 
                            className="input-field font-mono text-white text-sm" 
                            style={{ paddingLeft: "2.25rem" }}
                          />
                        </div>
                        
                        {/* Quick Presets / Increments */}
                        <div className="flex gap-2 flex-wrap mt-2">
                          {[1000, 5000, 10000, 50000].map((preset) => (
                            <button
                              key={preset}
                              type="button"
                              onClick={() => {
                                const currentPrice = Number(productForm.price) || 0;
                                setProductForm({ ...productForm, price: (currentPrice + preset).toString() });
                              }}
                              className="text-[9px] font-extrabold font-h uppercase tracking-wider px-2.5 py-1.5 rounded bg-white/5 border border-white/10 hover:border-gold hover:bg-gold/10 text-muted hover:text-white transition"
                            >
                              +{preset.toLocaleString("en-IN")}
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={() => setProductForm({ ...productForm, price: "" })}
                            className="text-[9px] font-extrabold font-h uppercase tracking-wider px-2.5 py-1.5 rounded bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-white text-red-400 transition ml-auto"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">CATEGORY / TIER</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1">
                          {CATEGORY_OPTIONS.map((opt) => {
                            const isSelected = productForm.category === opt.value;
                            const IconComponent = opt.icon;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => setProductForm({ ...productForm, category: opt.value })}
                                style={{
                                  borderColor: isSelected ? "var(--color-gold)" : "rgba(255,255,255,0.08)",
                                }}
                                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all gap-1.5 ${
                                  isSelected
                                    ? "bg-gold/15 text-white shadow-[0_0_12px_rgba(255,215,0,0.15)]"
                                    : "bg-white/2 hover:bg-white/5 text-muted hover:text-white"
                                }`}
                              >
                                <IconComponent 
                                  size={18} 
                                  style={{ color: isSelected ? "var(--color-gold)" : "currentColor" }} 
                                />
                                <span className="text-[10px] font-extrabold font-h uppercase tracking-wider">{opt.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">PRIMARY LOGIN</label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {PRIMARY_LOGIN_OPTIONS.map((opt) => {
                            const isSelected = productForm.primaryLogin === opt.value;
                            const IconComponent = opt.icon;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => setProductForm({ ...productForm, primaryLogin: opt.value })}
                                style={{
                                  borderColor: isSelected ? "var(--color-gold)" : "rgba(255,255,255,0.08)",
                                }}
                                className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all ${
                                  isSelected
                                    ? "bg-gold/15 text-white shadow-[0_0_12px_rgba(255,215,0,0.15)]"
                                    : "bg-white/2 hover:bg-white/5 text-muted hover:text-white"
                                }`}
                              >
                                <div 
                                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" 
                                  style={{ background: opt.bg, color: opt.color }}
                                >
                                  <IconComponent />
                                </div>
                                <span className="flex-1 text-[11px] font-bold font-h truncate">{opt.label}</span>
                                <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                                  isSelected ? "border-gold" : "border-white/30"
                                }`}>
                                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-gold" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">SECONDARY LOGIN</label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {SECONDARY_LOGIN_OPTIONS.map((opt) => {
                            const isSelected = productForm.secondaryLogin === opt.value || 
                              (opt.value === "None" && (!productForm.secondaryLogin || productForm.secondaryLogin === "None" || productForm.secondaryLogin === "None (Single Login)"));
                            const IconComponent = opt.icon;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => setProductForm({ ...productForm, secondaryLogin: opt.value === "None" ? "None (Single Login)" : opt.value })}
                                style={{
                                  borderColor: isSelected ? "var(--color-gold)" : "rgba(255,255,255,0.08)",
                                }}
                                className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all ${
                                  isSelected
                                    ? "bg-gold/15 text-white shadow-[0_0_12px_rgba(255,215,0,0.15)]"
                                    : "bg-white/2 hover:bg-white/5 text-muted hover:text-white"
                                }`}
                              >
                                <div 
                                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" 
                                  style={{ background: opt.bg, color: opt.color }}
                                >
                                  <IconComponent />
                                </div>
                                <span className="flex-1 text-[11px] font-bold font-h truncate">{opt.label}</span>
                                <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                                  isSelected ? "border-gold" : "border-white/30"
                                }`}>
                                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-gold" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">PROMO TAG</label>
                        <div className="grid grid-cols-2 gap-2 mt-1 max-h-48 overflow-y-auto pr-1 border border-white/5 rounded-xl p-2 bg-black/10">
                          {PROMO_TAG_OPTIONS.map((opt) => {
                            const isSelected = productForm.tag === opt.value || 
                              (opt.value === "None" && (!productForm.tag || productForm.tag === "None"));
                            const IconComponent = opt.icon;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => setProductForm({ ...productForm, tag: opt.value })}
                                style={{
                                  borderColor: isSelected ? "var(--color-gold)" : "rgba(255,255,255,0.08)",
                                }}
                                className={`flex items-center gap-2 p-2 rounded-lg border text-left transition-all ${
                                  isSelected
                                    ? "bg-gold/15 text-white shadow-[0_0_10px_rgba(255,215,0,0.1)]"
                                    : "bg-white/2 hover:bg-white/5 text-muted hover:text-white"
                                }`}
                              >
                                <div 
                                  className="w-6 h-6 rounded flex items-center justify-center shrink-0" 
                                  style={{ background: opt.bg, color: opt.color }}
                                >
                                  <IconComponent size={12} />
                                </div>
                                <span className="flex-1 text-[10px] font-bold font-h truncate">{opt.label}</span>
                                <div className={`w-3 h-3 rounded-full border flex items-center justify-center shrink-0 ${
                                  isSelected ? "border-gold" : "border-white/30"
                                }`}>
                                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-gold" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div className="mb-2">
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">AVAILABILITY STATUS</label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {STATUS_OPTIONS.map((opt) => {
                            const isSelected = productForm.status === opt.value;
                            const IconComponent = opt.icon;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => setProductForm({ ...productForm, status: opt.value })}
                                className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all ${
                                  isSelected
                                    ? "text-white shadow-[0_0_12px_rgba(255,255,255,0.05)]"
                                    : "bg-white/2 hover:bg-white/5 text-muted hover:text-white"
                                }`}
                                style={{
                                  backgroundColor: isSelected ? opt.bg : undefined,
                                  borderColor: isSelected ? opt.color : "rgba(255,255,255,0.08)"
                                }}
                              >
                                <div 
                                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" 
                                  style={{ background: opt.bg, color: opt.color }}
                                >
                                  <IconComponent size={14} />
                                </div>
                                <span className="flex-1 text-[11px] font-bold font-h truncate">{opt.label}</span>
                                <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0`}
                                  style={{ borderColor: isSelected ? opt.color : "rgba(255,255,255,0.3)" }}
                                >
                                  {isSelected && <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: opt.color }} />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {editingProduct && (
                          <button 
                            type="button" 
                            onClick={resetProductForm} 
                            className="btn border border-white/10 hover:bg-white/5 text-white flex-1 justify-center py-3"
                          >
                            CANCEL
                          </button>
                        )}
                        <button type="submit" className="btn btn-gold flex-[2] justify-center py-3">
                          {editingProduct ? "SAVE CHANGES" : "SAVE PRODUCT"}
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* INVENTORY LIST */}
                  <div className="lg:col-span-2">
                    <div className="glass-panel rounded-2xl flex flex-col overflow-hidden shadow-xl min-h-100">
                      <div className="p-4 border-b border-border flex justify-between items-center bg-black/20">
                        <span className="font-h text-[13px] font-bold text-white tracking-wider">Account Inventory</span>
                        <span className="text-[10px] text-muted font-mono">{productsList.length} items</span>
                      </div>
                      <div className="table-wrap m-4">
                        <table className="admin-table font-sans">
                          <tbody>
                            {productsList.length > 0 ? (
                              productsList.map((prod) => (
                                <tr key={prod.id}>
                                  <td>
                                    <div className="flex flex-col gap-1">
                                      <strong className="text-white text-xs">{prod.title}</strong>
                                      <div className="flex items-center gap-2">
                                        <span className="font-bold text-gold font-mono text-[11px]">₹{Number(prod.price).toLocaleString("en-IN")}</span>
                                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase tracking-wider ${prod.status === "available" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>{prod.status}</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="w-24 text-right">
                                    <div className="flex gap-2 justify-end">
                                      <button onClick={() => {
                                        setEditingProduct(prod);
                                        setProductForm({
                                          title: prod.title,
                                          description: prod.description || "",
                                          price: prod.price.toString(),
                                          category: prod.category,
                                          status: prod.status,
                                          youtubeUrl: prod.youtubeUrl || "",
                                          primaryLogin: prod.primaryLogin || "Facebook",
                                          secondaryLogin: prod.secondaryLogin || "None (Single Login)",
                                          unlinkGuarantee: prod.unlinkGuarantee || "Not Applicable",
                                          tag: prod.tag || "None",
                                          imageUrls: prod.imageUrls || []
                                        });
                                      }} className="p-2 bg-white/5 border border-white/10 rounded-md text-gold hover:bg-white/10 transition">
                                        <Edit size={12} />
                                      </button>
                                      <button onClick={() => handleDeleteProduct(prod.id)} className="p-2 bg-white/5 border border-white/10 rounded-md text-red-400 hover:bg-white/10 transition">
                                        <Trash2 size={12} />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td className="text-center py-8 text-muted font-mono text-xs">No products listed. Add one to begin!</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ==============================================================
                  TAB: DESCRIPTION FACTORY
                  ============================================================== */}
              {activeTab === "description_factory" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* LEFT PANEL: PARSER */}
                  <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 font-bold tracking-wider font-h text-gold">
                        <Zap size={16} /> AI Description Factory
                        <span className="text-[8px] bg-green-500 text-black px-1.5 py-0.5 rounded ml-2 uppercase">100% Client-Side</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-[9px] font-bold border border-white/20 px-3 py-1.5 rounded hover:bg-white/5 transition text-muted flex items-center gap-1">
                          <LayoutDashboard size={12} /> BROWSER PRESETS (0)
                        </button>
                        <button className="text-[9px] font-bold border border-gold text-gold px-3 py-1.5 rounded hover:bg-gold hover:text-black transition flex items-center gap-1">
                          <Check size={12} /> SAVE PRESET
                        </button>
                        <button className="text-[9px] font-bold bg-red-500/20 text-red-400 px-3 py-1.5 rounded hover:bg-red-500 hover:text-white transition flex items-center gap-1">
                          <Trash2 size={12} /> CLEAR INPUT
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                      <div className="glass-panel rounded-xl p-3 flex flex-col justify-center">
                        <span className="text-[8px] font-bold text-muted tracking-widest uppercase mb-1">MYTHICS DETECTED</span>
                        <span className="text-xl font-black font-h text-gold">{parsedData.mythics}</span>
                      </div>
                      <div className="glass-panel rounded-xl p-3 flex flex-col justify-center">
                        <span className="text-[8px] font-bold text-muted tracking-widest uppercase mb-1">X-SUITS DETECTED</span>
                        <span className="text-xl font-black font-h text-gold">{parsedData.xsuits}</span>
                      </div>
                      <div className="glass-panel rounded-xl p-3 flex flex-col justify-center">
                        <span className="text-[8px] font-bold text-muted tracking-widest uppercase mb-1">WEAPON LABS DETECTED</span>
                        <span className="text-xl font-black font-h text-gold">{parsedData.guns}</span>
                      </div>
                      <div className="glass-panel rounded-xl p-3 flex flex-col justify-center">
                        <span className="text-[8px] font-bold text-muted tracking-widest uppercase mb-1">VEHICLES DETECTED</span>
                        <span className="text-xl font-black font-h text-gold">{parsedData.vehicles}</span>
                      </div>
                    </div>

                    <div className="glass-panel rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3 text-[10px] font-bold uppercase tracking-wider text-white">
                        <Edit size={12} className="text-gold" /> PASTE MESSY RAW BGMI DATA
                      </div>
                      <p className="text-[9px] text-muted mb-4">
                        Paste messy raw specifications below. The AI/Rule-based parser will instantly detect values, clean spellings, calculate totals, and organize posting formats.
                      </p>
                      <textarea 
                        value={rawDescription}
                        onChange={e => setRawDescription(e.target.value)}
                        className="w-full h-62.5 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-muted font-mono resize-none focus:outline-none focus:border-gold transition"
                        placeholder="Example Paste Structure:&#10;&#10;100 mythics&#10;ignis xsuit lvl 4&#10;galadria xsuit lvl 1&#10;m416 shinobi kami on hit&#10;m416 sealed realm lvl 6 on hit&#10;42 gun labs&#10;19 kill feeds&#10;3 supercars&#10;4 upgraded vehicles&#10;&#10;account level 81&#10;pro collector 63"
                      ></textarea>
                      <div className="flex justify-end mt-3">
                        <button className="text-[9px] font-bold border border-white/20 px-3 py-1.5 rounded hover:bg-white/5 transition text-white">
                          LOAD PLACEHOLDER DEMO SPEC
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-white/5 transition">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gold">
                        <Settings size={12} /> FINE-TUNE PARSED DATA (MANUAL EDITING)
                      </div>
                      <X size={14} className="rotate-45" />
                    </div>
                  </div>

                  {/* RIGHT PANEL: PREVIEW */}
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-2 mb-2 border-b border-border pb-4">
                      <button className="text-[9px] font-bold bg-gold text-black px-4 py-1.5 rounded-full flex items-center gap-1">
                         <MessageSquare size={12} /> WHATSAPP VIEW
                      </button>
                      <button className="text-[9px] font-bold border border-white/20 text-muted hover:text-white px-4 py-1.5 rounded-full flex items-center gap-1 transition">
                         <Zap size={12} /> TELEGRAM VIEW
                      </button>
                    </div>

                    <div className="grow flex items-center justify-center bg-black/20 border border-border rounded-2xl p-6 relative overflow-hidden">
                      {/* Simulated WhatsApp Phone */}
                      <div className="w-75 h-112.5 bg-[#111b21] rounded-4xl border-[6px] border-[#222e35] shadow-2xl flex flex-col overflow-hidden relative">
                        {/* Header */}
                        <div className="bg-[#202c33] h-12 flex items-center px-3 gap-3 shrink-0">
                          <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-bold">MB</div>
                          <div className="flex flex-col">
                            <span className="text-white text-[11px] font-bold">Maddy BGMI Store WhatsApp Channel</span>
                            <span className="text-[8px] text-muted">Official • posting style</span>
                          </div>
                        </div>
                        {/* Chat Body */}
                        <div className="grow bg-[#0b141a] p-3 overflow-y-auto">
                          <div className="bg-[#005c4b] rounded-lg rounded-tl-none p-3 max-w-[90%] shadow text-[10px] text-white leading-relaxed font-sans">
                            <span className="block mb-2 font-bold">#NEWSTOCK<br/>#NEWPOST</span>
                            <span className="block mb-3">‼️❤️ Premium Deal Of The Day ❤️‼️</span>
                            <span className="block mb-3">➥ Bgmi {parsedData.mythics} Mythics + {parsedData.guns}xTotal Gun Labs + {parsedData.xsuits}xX-Suits + {parsedData.vehicles}xUpgraded Vehicles✨</span>
                            <span className="block mb-1">🙎‍♂️Account Level - {parsedData.level}</span>
                            <span className="block mb-1">✅Pro Collector - ({parsedData.collector})</span>
                            <span className="block mb-1">👘Mythic Fashion - ({parsedData.fashion})</span>
                            <span className="block mb-3">👘Ultimate Mythic Fashion - ({parsedData.ultimateFashion})</span>
                            <span className="block mb-3">✅Logins : {parsedData.logins} ✅</span>
                            <span className="block font-bold">📩DM WHATSAPP</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted border-b border-border pb-2">
                        <LayoutDashboard size={12} className="text-gold" /> Description Actions
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="btn btn-outline justify-center text-[10px] py-3">
                          <Copy size={12} /> COPY TELEGRAM STYLE
                        </button>
                        <button className="btn btn-gold justify-center text-[10px] py-3">
                          <Copy size={12} /> COPY WHATSAPP STYLE
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="glass-panel hover:bg-white/5 transition rounded-xl text-white font-bold text-[10px] justify-center flex items-center py-3 gap-2">
                          <Copy size={12} /> COPY BOTH STYLES
                        </button>
                        <button className="glass-panel hover:bg-white/5 transition rounded-xl text-white font-bold text-[10px] justify-center flex items-center py-3 gap-2">
                          <Check size={12} /> DOWNLOAD TXT FILE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ==============================================================
                  TAB: UC PACKS
                  ============================================================== */}
              {activeTab === "uc_packs" && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* ADD UC PACK */}
                  <div className="lg:col-span-1 glass-panel rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-2 mb-6 text-white font-bold tracking-wider font-h">
                      <Link2 size={16} /> Add UC Pack
                    </div>
                    <form className="flex flex-col gap-4" onSubmit={handleUcPackSubmit}>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">UC AMOUNT</label>
                        <input type="text" value={ucPackForm.ucAmount} onChange={e => setUcPackForm({ ...ucPackForm, ucAmount: e.target.value })} placeholder="e.g. 8,000 UC" className="input-field" required />
                      </div>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">BONUS UC</label>
                        <input type="text" value={ucPackForm.bonusUc} onChange={e => setUcPackForm({ ...ucPackForm, bonusUc: e.target.value })} placeholder="e.g. 60" className="input-field" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">SELLING PRICE (₹)</label>
                          <input type="text" value={ucPackForm.marketPrice} onChange={e => setUcPackForm({ ...ucPackForm, marketPrice: e.target.value })} placeholder="e.g. 7,500" className="input-field" />
                        </div>
                        <div>
                          <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">OUR OFFER PRICE (₹)</label>
                          <input type="text" value={ucPackForm.offerPrice} onChange={e => setUcPackForm({ ...ucPackForm, offerPrice: e.target.value })} placeholder="e.g. 6,500" className="input-field" required />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">PURCHASE METHOD</label>
                        <select className="input-field" value={ucPackForm.method} onChange={e => setUcPackForm({ ...ucPackForm, method: e.target.value })}>
                          <option value="view_login">View Login UC (Facebook / X)</option>
                          <option value="character_id">Player ID (In-Game)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">PROMO TAG</label>
                        <select className="input-field" value={ucPackForm.tag} onChange={e => setUcPackForm({ ...ucPackForm, tag: e.target.value })}>
                          <option value="None">None</option>
                          <option value="Best Value">Best Value</option>
                          <option value="Hot">Hot</option>
                        </select>
                      </div>
                      <button type="submit" className="btn btn-gold w-full mt-2 justify-center py-3">SAVE PACK</button>
                    </form>
                  </div>

                  {/* UC PACK LIST */}
                  <div className="lg:col-span-2 glass-panel rounded-2xl flex flex-col overflow-hidden shadow-xl">
                    <div className="p-4 border-b border-border font-h text-sm font-bold tracking-wider text-white">
                      UC Price List ({ucPacksList.length})
                    </div>
                    <div className="p-6">
                      <div className="bg-gold-dim border border-gold/20 shadow-[0_0_15px_rgba(255,215,0,0.05)] rounded-lg p-4 flex gap-3 text-[11px] text-gold font-mono mb-6">
                        <ShieldAlert size={16} className="shrink-0" />
                        Note: UC prices fluctuate based on market demand and availability. Update prices regularly.
                      </div>
                      
                      <div className="flex flex-col gap-4">
                        {ucPacksList.length === 0 ? (
                          <span className="text-[10px] text-muted font-mono flex justify-center py-10">No UC Packs listed yet.</span>
                        ) : (
                          ucPacksList.map(pack => (
                            <div key={pack.id} className="p-4 border border-border rounded-xl flex items-center justify-between hover:bg-white/5 transition">
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-black text-white font-h">{pack.ucAmount}</span>
                                  {pack.tag !== "None" && (
                                    <span className="bg-gold text-black text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">{pack.tag}</span>
                                  )}
                                  <span className="text-[10px] text-blue-400 font-mono bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                                    {pack.method === "character_id" ? "🎮 Player ID" : "🔑 View Login"}
                                  </span>
                                </div>
                                {pack.marketPrice && (
                                  <span className="text-[10px] text-muted">Market: <span className="line-through">₹{pack.marketPrice}</span></span>
                                )}
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="text-green-500 font-black font-h text-lg tracking-wider">₹{pack.offerPrice}</span>
                                <div className="flex gap-2">
                                  <button onClick={() => handleDeleteUcPack(pack.id)} className="text-red-400 hover:text-white transition"><Trash2 size={14}/></button>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ==============================================================
                  TAB: XSUIT GIFTS
                  ============================================================== */}
              {activeTab === "xsuit_gifts" && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* ADD XSUIT GIFT */}
                  <div className="lg:col-span-1 glass-panel rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-2 mb-6 text-white font-bold tracking-wider font-h">
                      <Zap size={16} /> Add Xsuit Gift
                    </div>
                    <form className="flex flex-col gap-4" onSubmit={handleXsuitSubmit}>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">XSUIT NAME</label>
                        <input type="text" value={xsuitForm.name} onChange={e => setXsuitForm({ ...xsuitForm, name: e.target.value })} placeholder="e.g. Poseidon X-Suit" className="input-field" required />
                      </div>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">OFFER PRICE (₹)</label>
                        <input type="text" value={xsuitForm.price} onChange={e => setXsuitForm({ ...xsuitForm, price: e.target.value })} placeholder="e.g. 15000" className="input-field" required />
                      </div>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">PROMO TAG</label>
                        <select className="input-field" value={xsuitForm.tag} onChange={e => setXsuitForm({ ...xsuitForm, tag: e.target.value })}>
                          <option value="None">None</option>
                          <option value="Hot">Hot</option>
                          <option value="Sale">Sale</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">IMAGE URL</label>
                        <input type="text" value={xsuitForm.imageUrl} onChange={e => setXsuitForm({ ...xsuitForm, imageUrl: e.target.value })} placeholder="https://..." className="input-field" />
                      </div>
                      <button type="submit" className="btn btn-gold w-full mt-2 justify-center py-3">SAVE XSUIT</button>
                    </form>
                  </div>

                  {/* XSUIT LIST */}
                  <div className="lg:col-span-2 glass-panel rounded-2xl flex flex-col overflow-hidden shadow-xl">
                    <div className="p-4 border-b border-border font-h text-sm font-bold tracking-wider text-white">
                      Xsuit Gift List ({xsuitsList.length})
                    </div>
                    <div className="p-6 h-full">
                      {xsuitsList.length === 0 ? (
                        <div className="flex items-center justify-center min-h-[100px]">
                          <span className="text-[10px] text-muted font-mono">No Xsuit Gifts listed yet.</span>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {xsuitsList.map(xsuit => (
                            <div key={xsuit.id} className="p-4 border border-border rounded-xl flex items-center justify-between hover:bg-white/5 transition">
                              <div className="flex items-center gap-3">
                                {xsuit.imageUrl ? (
                                  <img src={xsuit.imageUrl} alt={xsuit.name} className="w-10 h-10 rounded-lg object-cover" />
                                ) : (
                                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center"><Zap size={16} className="text-muted"/></div>
                                )}
                                <div className="flex flex-col">
                                  <span className="font-bold text-white text-sm">{xsuit.name}</span>
                                  {xsuit.tag !== "None" && <span className="text-gold text-[10px] uppercase font-bold">{xsuit.tag}</span>}
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-1">
                                <span className="text-green-500 font-bold">₹{xsuit.price}</span>
                                <button onClick={() => handleDeleteXsuit(xsuit.id)} className="text-red-400 hover:text-white transition mt-1"><Trash2 size={14}/></button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ==============================================================
                  TAB: CARS
                  ============================================================== */}
              {activeTab === "cars" && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* ADD CAR GIFT */}
                  <div className="lg:col-span-1 glass-panel rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-2 mb-6 text-white font-bold tracking-wider font-h">
                      <Gamepad2 size={16} /> Add Supercar Gift
                    </div>
                    <form className="flex flex-col gap-4" onSubmit={handleSupercarSubmit}>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">SUPERCAR NAME</label>
                        <input type="text" value={supercarForm.name} onChange={e => setSupercarForm({ ...supercarForm, name: e.target.value })} placeholder="e.g. Lamborghini Aventador" className="input-field" required />
                      </div>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">OFFER PRICE (₹)</label>
                        <input type="text" value={supercarForm.price} onChange={e => setSupercarForm({ ...supercarForm, price: e.target.value })} placeholder="e.g. 15000" className="input-field" required />
                      </div>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">PROMO TAG</label>
                        <select className="input-field" value={supercarForm.tag} onChange={e => setSupercarForm({ ...supercarForm, tag: e.target.value })}>
                          <option value="None">None</option>
                          <option value="Hot">Hot</option>
                          <option value="Sale">Sale</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">CAR TYPE</label>
                        <select className="input-field" value={supercarForm.type} onChange={e => setSupercarForm({ ...supercarForm, type: e.target.value })}>
                          <option value="Sports">Sports</option>
                          <option value="SUV">SUV</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">IMAGE URL</label>
                        <input type="text" value={supercarForm.imageUrl} onChange={e => setSupercarForm({ ...supercarForm, imageUrl: e.target.value })} placeholder="https://..." className="input-field" />
                      </div>
                      <button type="submit" className="btn btn-gold w-full mt-2 justify-center py-3">SAVE CAR</button>
                    </form>
                  </div>

                  {/* CAR LIST */}
                  <div className="lg:col-span-2 glass-panel rounded-2xl flex flex-col overflow-hidden shadow-xl">
                    <div className="p-4 border-b border-border font-h text-sm font-bold tracking-wider text-white">
                      Supercar Gift List ({supercarsList.length})
                    </div>
                    <div className="p-6 h-full">
                      {supercarsList.length === 0 ? (
                        <div className="flex items-center justify-center min-h-[100px]">
                          <span className="text-[10px] text-muted font-mono">No Supercars listed yet.</span>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {supercarsList.map(car => (
                            <div key={car.id} className="p-4 border border-border rounded-xl flex items-center justify-between hover:bg-white/5 transition">
                              <div className="flex items-center gap-3">
                                {car.imageUrl ? (
                                  <img src={car.imageUrl} alt={car.name} className="w-10 h-10 rounded-lg object-cover" />
                                ) : (
                                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center"><Car size={16} className="text-muted"/></div>
                                )}
                                <div className="flex flex-col">
                                  <span className="font-bold text-white text-sm">{car.name}</span>
                                  {car.tag !== "None" && <span className="text-gold text-[10px] uppercase font-bold">{car.tag}</span>}
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-1">
                                <span className="text-green-500 font-bold">₹{car.price}</span>
                                <button onClick={() => handleDeleteSupercar(car.id)} className="text-red-400 hover:text-white transition mt-1"><Trash2 size={14}/></button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}


              {/* ==============================================================
                  TAB: PROOFS
                  ============================================================== */}
              {activeTab === "proofs" && (
                <div className="flex flex-col gap-6">
                  <form className="glass-panel rounded-2xl p-6 shadow-xl" onSubmit={handleProofSubmit}>
                    <div className="flex items-center gap-2 mb-6 text-white font-bold tracking-wider text-sm font-h">
                      <Camera size={16} /> Upload New Proof
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      <div className="col-span-1">
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">TITLE</label>
                        <input type="text" value={proofForm.title} onChange={e => setProofForm({ ...proofForm, title: e.target.value })} placeholder="e.g. Payment Proof" className="input-field" required />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">MONTH</label>
                        <select className="input-field" value={proofForm.month} onChange={e => setProofForm({ ...proofForm, month: e.target.value })} required>
                          <option value="">Select Month</option>
                          <option value="January">January</option>
                          <option value="February">February</option>
                          <option value="March">March</option>
                          <option value="April">April</option>
                          <option value="May">May</option>
                          <option value="June">June</option>
                          <option value="July">July</option>
                          <option value="August">August</option>
                          <option value="September">September</option>
                          <option value="October">October</option>
                          <option value="November">November</option>
                          <option value="December">December</option>
                        </select>
                      </div>
                      <div className="col-span-1">
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">YEAR</label>
                        <select className="input-field" value={proofForm.year} onChange={e => setProofForm({ ...proofForm, year: e.target.value })} required>
                          <option value="">Select Year</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                        </select>
                      </div>
                      <div className="col-span-1">
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">IMAGE URL</label>
                        <input type="text" value={proofForm.imageUrl} onChange={e => setProofForm({ ...proofForm, imageUrl: e.target.value })} placeholder="https://..." className="input-field" required />
                      </div>
                    </div>
                    <div className="mt-6">
                      <button type="submit" className="btn btn-gold w-48 justify-center py-3 text-[10px]">UPLOAD PROOF</button>
                    </div>
                  </form>

                  <div className="glass-panel rounded-2xl p-6 shadow-xl flex flex-col">
                    <div className="mb-6 border-b border-border pb-4 font-h text-sm font-bold tracking-wider text-white">
                      Proof Gallery ({proofsList.length})
                    </div>
                    {proofsList.length === 0 ? (
                      <div className="flex flex-col items-center justify-center min-h-75">
                        <Camera size={48} className="text-white/5 mb-4" />
                        <p className="text-[11px] text-muted font-mono">No proofs uploaded yet.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {proofsList.map(proof => (
                          <div key={proof.id} className="relative group rounded-xl overflow-hidden border border-border">
                            <img src={proof.imageUrl} alt={proof.title} className="w-full h-32 object-cover" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                              <button onClick={() => handleDeleteProof(proof.id)} className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-400 transition"><Trash2 size={16}/></button>
                            </div>
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                              <p className="text-[10px] text-white font-bold truncate">{proof.title}</p>
                              <p className="text-[9px] text-gold">{proof.month} {proof.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ==============================================================
                  TAB: REVIEWS
                  ============================================================== */}
              {activeTab === "reviews" && (
                <div className="flex flex-col gap-6">
                  {/* STATS */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="glass-panel rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
                      <span className="text-3xl font-black font-h text-gold mb-1">{reviewsList.length}</span>
                      <span className="text-[10px] font-bold text-muted tracking-widest uppercase">TOTAL</span>
                    </div>
                    <div className="glass-panel rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
                      <span className="text-3xl font-black font-h text-green-500 mb-1">{reviewsList.filter(r => r.status === 'approved').length}</span>
                      <span className="text-[10px] font-bold text-muted tracking-widest uppercase">APPROVED</span>
                    </div>
                    <div className="glass-panel rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
                      <span className="text-3xl font-black font-h text-orange-500 mb-1">{reviewsList.filter(r => r.status === 'pending').length}</span>
                      <span className="text-[10px] font-bold text-muted tracking-widest uppercase">PENDING</span>
                    </div>
                    <div className="glass-panel rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
                      <span className="text-3xl font-black font-h text-red-500 mb-1">{reviewsList.filter(r => r.status === 'rejected').length}</span>
                      <span className="text-[10px] font-bold text-muted tracking-widest uppercase">REJECTED</span>
                    </div>
                  </div>

                  <div className="glass-panel rounded-2xl flex flex-col overflow-hidden shadow-xl min-h-100">
                    <div className="p-4 border-b border-border flex justify-between items-center bg-black/20">
                      <span className="font-h text-[13px] font-bold text-white tracking-wider">Review Management</span>
                      <span className="text-[10px] text-muted font-mono">Reviews submitted by buyers - No manual entries</span>
                    </div>
                    {reviewsList.length > 0 ? (
                      <div className="table-wrap m-4">
                        <table className="admin-table">
                          <thead>
                            <tr>
                              <th>Author Name</th>
                              <th>Star Rating</th>
                              <th>Comment</th>
                              <th>Status</th>
                              <th>Submitted</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {reviewsList.map((rev) => (
                              <tr key={rev.id}>
                                <td className="font-semibold text-white">{rev.name}</td>
                                <td className="font-bold text-gold font-mono">{rev.rating} / 5 ★</td>
                                <td className="max-w-75 truncate text-xs">{rev.comment || "No comment left"}</td>
                                <td>
                                  <span className={`text-[10px] px-2.5 py-1 rounded-full font-black uppercase tracking-wider ${
                                    rev.status === "approved" 
                                      ? "bg-green-500/10 text-green-400 border border-green-500/20" 
                                      : rev.status === "pending" 
                                      ? "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                                  }`}>
                                    {rev.status}
                                  </span>
                                </td>
                                <td className="text-xs text-muted">{new Date(rev.createdAt).toLocaleDateString()}</td>
                                <td>
                                  <div className="flex gap-2">
                                    {rev.status !== "approved" && (
                                      <button onClick={() => handleReviewStatus(rev.id, "approved")} className="p-2 hover:bg-white/5 rounded-lg text-green-400 hover:text-white transition" title="Approve Review">
                                        <Check size={14} />
                                      </button>
                                    )}
                                    {rev.status !== "rejected" && (
                                      <button onClick={() => handleReviewStatus(rev.id, "rejected")} className="p-2 hover:bg-white/5 rounded-lg text-red-400 hover:text-white transition" title="Reject Review">
                                        <X size={14} />
                                      </button>
                                    )}
                                    <button onClick={() => handleDeleteReview(rev.id)} className="p-2 hover:bg-white/5 rounded-lg text-red-400 hover:text-white transition" title="Delete Review">
                                      <Trash2 size={14} />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center grow opacity-60 mt-10">
                        <MessageSquare size={36} className="text-muted mb-4" />
                        <span className="text-[11px] text-muted font-mono">No buyer reviews yet. Share your review link after each successful deal.</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ==============================================================
                  TAB: FEEDBACK
                  ============================================================== */}
              {activeTab === "customer_feedback" && (
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* CSAT CARD */}
                    <div className="glass-panel rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl">
                      <div className="w-32 h-32 rounded-full border-[6px] border-gold flex flex-col items-center justify-center mb-6">
                         <span className="text-[40px] font-black font-h text-white leading-none">5.0</span>
                         <span className="text-[10px] font-bold text-gold uppercase tracking-widest mt-1">STORE CSAT</span>
                      </div>
                      <h3 className="text-white font-bold text-[13px] tracking-wider font-h mb-2">Constructive CSAT Index</h3>
                      <p className="text-[11px] text-muted font-mono text-center max-w-62.5">Calculated from {feedbackList.length} store improvement ratings.</p>
                    </div>
                    {/* CRM ACTION CENTER */}
                    <div className="glass-panel rounded-2xl p-6 shadow-xl">
                      <div className="flex items-center gap-2 mb-6 text-white font-bold tracking-wider text-sm font-h border-b border-white/5 pb-4">
                        <Users size={16} className="text-gold" /> CRM Action Center
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-6 flex flex-col items-center justify-center">
                          <span className="text-3xl font-black font-h text-red-500 mb-2">{feedbackList.filter(f => f.status === 'unread').length}</span>
                          <span className="text-[9px] font-bold text-muted tracking-widest uppercase">UNREAD FEEDBACK</span>
                        </div>
                        <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-6 flex flex-col items-center justify-center">
                          <span className="text-3xl font-black font-h text-emerald-500 mb-2">{feedbackList.filter(f => f.status !== 'unread').length}</span>
                          <span className="text-[9px] font-bold text-muted tracking-widest uppercase">READ / PROCESSED</span>
                        </div>
                      </div>
                      <div className="bg-gold-dim border border-gold/20 shadow-[0_0_15px_rgba(255,215,0,0.05)] border-dashed rounded-lg p-3 text-[10px] text-muted leading-relaxed">
                        <span className="text-gold font-bold">💡 What Customers Want:</span> Review specific requested items in cards below. Click the WhatsApp button to fulfill requests directly!
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel rounded-2xl flex flex-col overflow-hidden shadow-xl min-h-75">
                    <div className="p-4 border-b border-border flex justify-between items-center bg-black/20">
                      <span className="font-h text-[13px] font-bold text-white tracking-wider flex items-center gap-2"><MessageSquare size={14} className="text-blue-400"/> Customer Feedback Registry</span>
                      <span className="text-[10px] text-muted font-mono">{feedbackList.length} submitted suggestions</span>
                    </div>
                    {feedbackList.length > 0 ? (
                      <div className="table-wrap m-4">
                        <table className="admin-table">
                          <thead>
                            <tr>
                              <th>Client Name</th>
                              <th>Mobile Phone</th>
                              <th>Stars</th>
                              <th>Review Text</th>
                              <th>Desired Items</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {feedbackList.map((fb) => (
                              <tr key={fb.id}>
                                <td className="font-semibold text-white">{fb.name}</td>
                                <td className="font-mono text-xs">{fb.phone}</td>
                                <td className="font-bold text-gold font-mono">{fb.stars} ★</td>
                                <td className="max-w-62.5 truncate text-xs">{fb.comment}</td>
                                <td className="text-xs text-muted">{fb.desiredItems || "—"}</td>
                                <td>
                                  <span className={`text-[10px] px-2.5 py-1 rounded-full font-black uppercase tracking-wider ${
                                    fb.status === "unread" 
                                      ? "bg-red-500/10 text-red-400 border border-red-500/20" 
                                      : "bg-white/5 text-muted border border-white/10"
                                  }`}>
                                    {fb.status}
                                  </span>
                                </td>
                                <td>
                                  <div className="flex gap-2">
                                    {fb.status === "unread" && (
                                      <button onClick={() => handleFeedbackStatus(fb.id, "read")} className="p-2 hover:bg-white/5 rounded-lg text-emerald-400 hover:text-white transition" title="Mark as Read">
                                        <Check size={14} />
                                      </button>
                                    )}
                                    {fb.phone && fb.phone !== "Not provided" && (
                                      <a 
                                        href={`https://wa.me/${fb.phone.replace(/[^0-9]/g, "")}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 hover:bg-white/5 rounded-lg text-emerald-400 hover:text-white transition flex items-center justify-center" 
                                        title="Reply on WhatsApp"
                                      >
                                        <MessageCircle size={14} />
                                      </a>
                                    )}
                                    <button onClick={() => handleFeedbackStatus(fb.id, "archived")} className="p-2 hover:bg-white/5 rounded-lg text-muted hover:text-white transition" title="Archive Log">
                                      <Trash2 size={14} />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center grow opacity-60 mt-10">
                         <span className="text-[11px] text-muted font-mono">No customer feedbacks submitted yet. Share the link <span className="text-gold font-bold">/feedback</span> with your clients to start collecting suggestions!</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ==============================================================
                  TAB: PAYLINKS
                  ============================================================== */}
              {activeTab === "payments" && (
                <div className="flex flex-col gap-6">
                  {/* DEFAULT PAYMENT TOOLS */}
                  <div className="glass-panel rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-2 mb-6 text-white font-bold tracking-wider text-sm font-h border-b border-white/5 pb-4">
                      <Zap size={16} className="text-gold" /> DEFAULT PAYMENT TOOLS
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                       <div>
                          <label className="block text-[9px] text-muted font-bold uppercase tracking-wider mb-2">PAYEE NAME (EDIT)</label>
                          <input type="text" placeholder="MATHEESWARAN R" className="input-field" />
                       </div>
                       <div>
                          <label className="block text-[9px] text-muted font-bold uppercase tracking-wider mb-2">PAYEE UPI ID (EDIT)</label>
                          <input type="text" placeholder="maddyxpay@ybl" className="input-field" />
                       </div>
                       <div>
                          <label className="block text-[9px] text-muted font-bold uppercase tracking-wider mb-2">BANK DETAILS ACCESS PIN (OPTIONAL)</label>
                          <input type="text" placeholder="e.g. 1536" className="input-field" />
                       </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                       <div className="col-span-2">
                          <label className="block text-[9px] text-muted font-bold uppercase tracking-wider mb-2">BANK DETAILS (EDIT)</label>
                          <div className="flex gap-2">
                            <input type="text" placeholder="Bank Name" className="input-field" />
                            <input type="text" placeholder="Account Holder" className="input-field" />
                          </div>
                       </div>
                       <div className="col-span-3 flex gap-2">
                          <div className="flex-1">
                            <label className="block text-[9px] text-muted font-bold uppercase tracking-wider mb-2">&nbsp;</label>
                            <input type="text" placeholder="Account Number" className="input-field" />
                          </div>
                          <div className="flex-1">
                            <label className="block text-[9px] text-muted font-bold uppercase tracking-wider mb-2">&nbsp;</label>
                            <input type="text" placeholder="IFSC Code" className="input-field" />
                          </div>
                          <div className="flex-1">
                            <label className="block text-[9px] text-muted font-bold uppercase tracking-wider mb-2">&nbsp;</label>
                            <input type="text" placeholder="Branch" className="input-field" />
                          </div>
                       </div>
                    </div>
                    <button className="btn btn-gold w-56 justify-center py-2.5 text-[10px]">SAVE PAYMENT TOOLS</button>
                  </div>

                  {/* Payment Manager Generator */}
                  <div className="glass-panel rounded-2xl p-6 shadow-xl">
                    <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                      <div className="flex items-center gap-2 text-white font-bold tracking-wider text-sm font-h">
                        <Zap size={16} className="text-gold" /> Payment Manager Generator
                      </div>
                      <span className="text-[9px] font-mono text-muted">SECURE CHECKOUT GENERATION</span>
                    </div>
                    <form onSubmit={handleCreatePayLink} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                        <div className="col-span-1">
                          <label className="block text-[9px] text-muted font-bold uppercase tracking-wider mb-2">TRANSACTION TYPE</label>
                          <select className="input-field border-white/20"><option>Account (MBSA)</option></select>
                        </div>
                        <div className="col-span-1">
                          <label className="block text-[9px] text-muted font-bold uppercase tracking-wider mb-2">TRANSACTION ID</label>
                          <input type="text" value="# MBSA404" className="input-field text-white font-bold bg-white/5 border-white/20" readOnly />
                        </div>
                        <div className="col-span-1">
                          <label className="block text-[9px] text-muted font-bold uppercase tracking-wider mb-2">CUSTOMER NAME</label>
                          <div className="relative">
                            <input 
                              type="text" 
                              required
                              value={payLinkForm.customerName}
                              onChange={e => setPayLinkForm({ ...payLinkForm, customerName: e.target.value })}
                              placeholder="e.g. Surya" 
                              className="input-field pl-8 border-white/20" 
                            />
                            <Users size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
                          </div>
                        </div>
                        <div className="col-span-1">
                          <label className="block text-[9px] text-muted font-bold uppercase tracking-wider mb-2">AMOUNT (₹)</label>
                          <input 
                            type="number" 
                            required
                            value={payLinkForm.amount}
                            onChange={e => setPayLinkForm({ ...payLinkForm, amount: e.target.value })}
                            placeholder="₹ 0.00" 
                            className="input-field text-gold font-bold border-white/20" 
                          />
                        </div>
                        <div className="col-span-1">
                          <label className="block text-[9px] text-muted font-bold uppercase tracking-wider mb-2">EXPIRY TIME</label>
                          <select 
                            value={payLinkForm.expiresHours}
                            onChange={e => setPayLinkForm({ ...payLinkForm, expiresHours: Number(e.target.value) })}
                            className="input-field border-white/20"
                          >
                            <option value={1}>10 Minutes</option>
                            <option value={3}>1 Hour</option>
                            <option value={6}>3 Hours</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                        <div className="col-span-1">
                           <label className="block text-[9px] text-muted font-bold uppercase tracking-wider mb-2">ACCESS PIN (OPTIONAL)</label>
                           <div className="relative">
                             <input 
                               type="text" 
                               maxLength={6}
                               value={payLinkForm.pin}
                               onChange={e => setPayLinkForm({ ...payLinkForm, pin: e.target.value.replace(/[^0-9]/g, "") })}
                               placeholder="None" 
                               className="input-field pl-8 border-white/20" 
                             />
                             <ShieldAlert size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
                           </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[9px] text-muted font-bold uppercase tracking-wider mb-2">PAYMENT NOTE / REFERENCE</label>
                        <input 
                          type="text" 
                          value={payLinkForm.note}
                          onChange={e => setPayLinkForm({ ...payLinkForm, note: e.target.value })}
                          placeholder="e.g. Account Purchase - Level 75..." 
                          className="input-field border-white/20" 
                        />
                      </div>

                      <button type="submit" className="btn btn-gold w-full justify-center py-3 mt-2 text-[11px] uppercase">
                         <Zap size={14} /> GENERATE SECURE PAYMENT LINK
                      </button>
                    </form>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="glass-panel rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
                      <span className="text-3xl font-black font-h text-gold mb-1">{paymentLinksList.length}</span>
                      <span className="text-[10px] font-bold text-muted tracking-widest uppercase">TOTAL</span>
                    </div>
                    <div className="glass-panel rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
                      <span className="text-3xl font-black font-h text-emerald-500 mb-1">{paymentLinksList.filter(l => l.status === 'active').length}</span>
                      <span className="text-[10px] font-bold text-muted tracking-widest uppercase">ACTIVE</span>
                    </div>
                    <div className="glass-panel rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
                      <span className="text-3xl font-black font-h text-red-500 mb-1">{paymentLinksList.filter(l => l.status !== 'active').length}</span>
                      <span className="text-[10px] font-bold text-muted tracking-widest uppercase">REVOKED</span>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="glass-panel rounded-2xl flex flex-col overflow-hidden shadow-xl min-h-75">
                    <div className="p-4 border-b border-border flex justify-between items-center bg-black/20">
                      <span className="font-h text-[13px] font-bold text-white tracking-wider flex items-center gap-2">Master Payment Registry</span>
                      <span className="text-[10px] text-muted font-mono">{paymentLinksList.length} total links</span>
                    </div>
                    {paymentLinksList.length > 0 ? (
                      <div className="table-wrap m-4">
                        <table className="admin-table font-sans">
                          <thead>
                            <tr>
                              <th>LINK ID</th>
                              <th>STATUS</th>
                              <th>CUSTOMER</th>
                              <th>AMOUNT</th>
                              <th>EXPIRES</th>
                              <th>ACTIONS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {paymentLinksList.map((link) => (
                              <tr key={link.id}>
                                <td>
                                  <strong className="text-gold text-xs font-mono">#{link.transactionId}</strong>
                                </td>
                                <td>
                                  <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider">
                                    {link.status === "active" ? "ACTIVE" : "INACTIVE"}
                                  </span>
                                </td>
                                <td>
                                  <strong className="text-muted uppercase text-xs tracking-wider">{link.customerName}</strong>
                                </td>
                                <td className="font-bold text-emerald-500 font-mono">₹{Number(link.amount).toLocaleString("en-IN")}</td>
                                <td>
                                  <div className="flex flex-col">
                                    <span className="text-xs text-muted">2 Jun, 09:30 pm <span className="text-red-400 text-[10px]">(EXPIRED)</span></span>
                                  </div>
                                </td>
                                <td>
                                  <div className="flex gap-2">
                                    <button onClick={() => copyPayLinkCheckout(link.id)} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-gold hover:bg-white/10 transition text-[10px] font-bold tracking-wider flex items-center gap-1">
                                      <Copy size={12} /> COPY
                                    </button>
                                    <button onClick={() => handleRevokePayLink(link.id)} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-red-400 hover:bg-white/10 transition text-[10px] font-bold tracking-wider flex items-center gap-1">
                                      <Trash2 size={12} /> DELETE
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center grow opacity-60 mt-10">
                        <span className="text-[11px] text-muted font-mono">No payment links generated.</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ==============================================================
                  TAB: ACTIVITY LOG
                  ============================================================== */}
              {activeTab === "activity_log" && (
                <div className="glass-panel rounded-2xl p-8 shadow-xl min-h-150">
                  <div className="flex items-center gap-2 mb-8 text-white font-bold tracking-wider text-sm font-h border-b border-white/5 pb-4">
                    <RefreshCw size={16} className="text-gold" /> Admin Activity Audit Trail
                  </div>
                  
                  <div className="flex flex-col gap-8 relative pl-6 border-l-2 border-white/10">
                    {activityLogsList.length > 0 ? (
                      activityLogsList.map((log) => (
                        <div className="relative" key={log.id}>
                          <div className="absolute -left-7.75 top-1 w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_var(--color-gold)]"></div>
                          <h4 className="text-sm font-bold text-white mb-1">{log.description}</h4>
                          <p className="text-[10px] text-muted font-mono">
                            Logged by {log.adminEmail} • {new Date(log.createdAt).toLocaleString()} • Action: {log.actionType}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="text-[11px] text-muted font-mono opacity-60">No activity logs found.</div>
                    )}
                  </div>
                </div>
              )}

              {/* ==============================================================
              {/* ==============================================================
                  TAB: ADMIN CONTROLS
                  ============================================================== */}
              {activeTab === "admin_controls" && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* ADD NEW ADMIN */}
                  <div className="col-span-1 glass-panel rounded-2xl p-6 shadow-xl h-fit">
                    <div className="flex items-center gap-2 mb-6 text-gold font-bold tracking-wider text-sm font-h">
                      <Key size={16} /> Add New Admin
                    </div>
                    <form className="flex flex-col gap-5" onSubmit={handleAddAdmin}>
                      <div>
                        <label className="block text-[10px] text-muted font-bold uppercase tracking-wider mb-2">ADMIN EMAIL ADDRESS</label>
                        <div className="relative">
                          <input 
                            type="email" 
                            placeholder="e.g. sethu@mbsx.store" 
                            className="input-field pl-9" 
                            value={newAdminEmail}
                            onChange={(e) => setNewAdminEmail(e.target.value)}
                          />
                          <User size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-gold w-full justify-center py-3 text-[11px]">AUTHORIZE ADMIN</button>
                    </form>
                    
                    <div className="mt-6 bg-blue-500/5 border border-blue-500/10 rounded-xl p-4 text-[10px] text-muted leading-relaxed">
                      <div className="font-bold text-blue-400 mb-1 flex items-center gap-1"><ShieldAlert size={12} /> Security Note:</div>
                      Adding an email creates/assigns a verified <strong className="text-white">admin custom claim</strong> in Clerk Auth. The new administrator can log in directly and manage all aspects of the transaction panel securely.
                    </div>
                  </div>

                  {/* ACTIVE ADMINISTRATORS */}
                  <div className="col-span-2 glass-panel rounded-2xl p-6 shadow-xl h-fit">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-white font-bold tracking-wider text-sm font-h">
                        <ShieldAlert size={16} className="text-gold" /> Active Administrators
                      </div>
                      <button onClick={triggerRefresh} className="text-[9px] font-bold border border-white/10 px-4 py-1.5 rounded hover:bg-white/5 transition text-white uppercase tracking-wider">
                        REFRESH LIST
                      </button>
                    </div>
                    
                    <div className="table-wrap">
                      <table className="admin-table text-left w-full">
                        <thead>
                          <tr className="border-b border-white/5">
                            <th className="py-3 px-4 text-[9px] font-bold text-muted uppercase tracking-wider">EMAIL ADDRESS</th>
                            <th className="py-3 px-4 text-[9px] font-bold text-muted uppercase tracking-wider">ROLE & CLAIM</th>
                            <th className="py-3 px-4 text-[9px] font-bold text-muted uppercase tracking-wider">ADDED DATE</th>
                            <th className="py-3 px-4 text-[9px] font-bold text-muted uppercase tracking-wider text-right">ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {activeAdminsList.map((admin) => (
                            <tr className="border-b border-white/5 hover:bg-white/5 transition group" key={admin.id}>
                              <td className="py-4 px-4 text-xs text-white font-semibold">{admin.email}</td>
                              <td className="py-4 px-4">
                                <span className="text-[8px] font-black uppercase tracking-widest text-gold bg-gold/10 px-2 py-1 rounded">{admin.role}</span>
                              </td>
                              <td className="py-4 px-4 text-[10px] text-muted font-mono">{admin.addedDate}</td>
                              <td className="py-4 px-4 text-right">
                                {admin.email === "maddybgmistoreog@gmail.com" ? (
                                  <span className="text-[9px] font-bold text-red-900 px-4 py-1.5 uppercase tracking-wider cursor-not-allowed">
                                    REVOKE
                                  </span>
                                ) : (
                                  <button onClick={() => handleRevokeAdmin(admin.id)} className="text-[9px] font-bold border border-red-500/20 text-red-400 px-4 py-1.5 rounded hover:bg-red-500 hover:text-white transition uppercase tracking-wider">
                                    REVOKE
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

      </main>

      <style>{`
        /* Global rules for layout custom widgets */
        .keypad-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          font-family: var(--font-h);
          border-radius: 8px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
        }
        .keypad-btn:active {
          transform: scale(0.95);
          background: rgba(255, 215, 0, 0.15);
          border-color: var(--color-gold);
        }
        .keypad-btn.action {
          background: rgba(255, 255, 255, 0.01);
          color: var(--color-muted);
          font-weight: 600;
        }
        .keypad-btn.action:active {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
        }
      `}</style>

    </div>
  );
}
