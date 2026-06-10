CREATE TYPE "public"."user_role" AS ENUM('SUPER_ADMIN', 'ADMIN', 'TRANSACTION_MANAGER', 'CONTENT_MANAGER', 'USER');--> statement-breakpoint
CREATE TABLE "account_transactions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"transaction_ref" text NOT NULL,
	"product_id" uuid,
	"owner_price" numeric NOT NULL,
	"sold_price" numeric NOT NULL,
	"profit" numeric NOT NULL,
	"logins" text,
	"credentials" text,
	"owner_phone" text,
	"seller_phone" text,
	"reseller_phone" text,
	"account_owner" text
);
--> statement-breakpoint
CREATE TABLE "admin_payment_settings" (
	"id" integer PRIMARY KEY DEFAULT 1 NOT NULL,
	"payee_name" text NOT NULL,
	"payee_upi_id" text,
	"bank_name" text,
	"account_type" text DEFAULT 'SAVINGS ACCOUNT' NOT NULL,
	"account_holder" text,
	"account_number" text,
	"ifsc_code" text,
	"branch" text,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "customer_feedback" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"stars" integer NOT NULL,
	"comment" text NOT NULL,
	"desired_items" text,
	"phone" text,
	"status" text DEFAULT 'unread' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "payment_links" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"access_token" text NOT NULL,
	"transaction_id" text NOT NULL,
	"customer_name" text NOT NULL,
	"amount" numeric NOT NULL,
	"status" text DEFAULT 'active' NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"note" text,
	"pin" text NOT NULL,
	"upi_id" text,
	"payee_name" text,
	"bank_details" jsonb,
	"failed_attempts" integer DEFAULT 0 NOT NULL,
	"revoked_at" timestamp with time zone,
	"revoked_reason" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "payment_links_access_token_unique" UNIQUE("access_token")
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"price" numeric NOT NULL,
	"category" text DEFAULT 'Budget' NOT NULL,
	"status" text DEFAULT 'available' NOT NULL,
	"youtube_url" text,
	"primary_login" text,
	"secondary_login" text,
	"unlink_guarantee" text DEFAULT 'Not Applicable' NOT NULL,
	"tag" text DEFAULT 'None' NOT NULL,
	"image_urls" text[],
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"role" "user_role" DEFAULT 'USER' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "profiles_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "proofs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text,
	"image_url" text NOT NULL,
	"month" text NOT NULL,
	"year" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"comment" text,
	"rating" integer NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "site_views" (
	"id" text PRIMARY KEY NOT NULL,
	"count" bigint DEFAULT 0 NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "supercar_gifts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"price" numeric NOT NULL,
	"type" text,
	"image_url" text,
	"tag" text DEFAULT 'None' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "supercar_transactions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"transaction_ref" text NOT NULL,
	"car_name" text NOT NULL,
	"price" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"transaction_id" text NOT NULL,
	"buyer_name" text NOT NULL,
	"buyer_phone" text,
	"buyer_contact" text,
	"total_amount" numeric NOT NULL,
	"mode_of_deal" text DEFAULT 'WhatsApp' NOT NULL,
	"deal_date" date NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "transactions_transaction_id_unique" UNIQUE("transaction_id")
);
--> statement-breakpoint
CREATE TABLE "uc_prices" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"uc_amount" integer NOT NULL,
	"market_price" numeric,
	"offer_price" numeric NOT NULL,
	"bonus_uc" integer DEFAULT 0 NOT NULL,
	"method" text DEFAULT 'view_login' NOT NULL,
	"tag" text DEFAULT 'None' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "uc_transactions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"transaction_ref" text NOT NULL,
	"uc_amount" integer NOT NULL,
	"price" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE "xsuit_gifts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"price" numeric NOT NULL,
	"image_url" text,
	"tag" text DEFAULT 'None' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "xsuit_transactions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"transaction_ref" text NOT NULL,
	"xsuit_name" text NOT NULL,
	"price" numeric NOT NULL
);
--> statement-breakpoint
ALTER TABLE "account_transactions" ADD CONSTRAINT "account_transactions_transaction_ref_transactions_transaction_id_fk" FOREIGN KEY ("transaction_ref") REFERENCES "public"."transactions"("transaction_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "account_transactions" ADD CONSTRAINT "account_transactions_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "supercar_transactions" ADD CONSTRAINT "supercar_transactions_transaction_ref_transactions_transaction_id_fk" FOREIGN KEY ("transaction_ref") REFERENCES "public"."transactions"("transaction_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "uc_transactions" ADD CONSTRAINT "uc_transactions_transaction_ref_transactions_transaction_id_fk" FOREIGN KEY ("transaction_ref") REFERENCES "public"."transactions"("transaction_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "xsuit_transactions" ADD CONSTRAINT "xsuit_transactions_transaction_ref_transactions_transaction_id_fk" FOREIGN KEY ("transaction_ref") REFERENCES "public"."transactions"("transaction_id") ON DELETE cascade ON UPDATE no action;