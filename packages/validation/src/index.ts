import { z } from "zod";

// 1. Product Validation
export const ProductSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(120),
  description: z.string().optional(),
  price: z.preprocess((val) => Number(val), z.number().positive("Price must be a positive number")),
  category: z.enum(["Budget", "Mid Range", "Premium", "Ultra Premium"]).default("Budget"),
  status: z.enum(["available", "sold"]).default("available"),
  youtubeUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  primaryLogin: z.string().min(1, "Primary login type is required"),
  secondaryLogin: z.string().optional().or(z.literal("")),
  unlinkGuarantee: z.string().default("Not Applicable"),
  tag: z.string().default("None"),
  imageUrls: z.array(z.string().url()).optional(),
});

// 2. Review Validation
export const ReviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(60),
  comment: z.string().min(5, "Comment must be at least 5 characters").max(1000),
  rating: z.number().min(1).max(5),
  status: z.enum(["pending", "approved", "rejected"]).default("pending"),
});

// 3. Customer Feedback Validation
export const CustomerFeedbackSchema = z.object({
  name: z.string().min(2, "Name is required").max(60),
  stars: z.number().min(1).max(5),
  comment: z.string().min(5, "Comment must be at least 5 characters").max(1000),
  desiredItems: z.string().optional(),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Must be a valid phone number").optional().or(z.literal("")),
  status: z.enum(["unread", "read", "archived"]).default("unread"),
});

// 4. Payment Link Validation
export const PaymentLinkSchema = z.object({
  transactionId: z.string().min(3, "Transaction reference is required"),
  customerName: z.string().min(2, "Customer name is required"),
  amount: z.preprocess((val) => Number(val), z.number().positive("Amount must be positive")),
  expiresInMinutes: z.number().int().min(5).max(30).default(10),
  pin: z.string().regex(/^\d{4,6}$/, "PIN must be between 4 and 6 digits"),
  upiId: z.string().regex(/^[\w.\-]{2,}@[\w.\-]+$/, "Invalid UPI ID format").optional(),
  payeeName: z.string().min(1).optional(),
  note: z.string().optional(),
});

// 5. Transaction Log Validation
export const TransactionSchema = z.object({
  transactionId: z.string().regex(/^MBS[A-Z]{1,2}\d+$/, "Invalid sequential ID prefix (e.g. MBSA403, MBSXS001)"),
  buyerName: z.string().min(2, "Buyer name is required"),
  buyerPhone: z.string().optional().or(z.literal("")),
  buyerContact: z.string().optional().or(z.literal("")),
  totalAmount: z.preprocess((val) => Number(val), z.number().positive("Amount must be positive")),
  modeOfDeal: z.enum(["Telegram", "WhatsApp", "Face-to-Face", "Middleman"]).default("WhatsApp"),
  dealDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must follow YYYY-MM-DD format"),
});
