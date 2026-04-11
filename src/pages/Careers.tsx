import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/ui/footer-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { submitToLarkBase } from "@/lib/lark";
import {
  MapPin,
  Clock,
  Calendar,
  IndianRupee,
  Briefcase,
  Video,
  Sparkles,
  Users,
  X,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const applicationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  whatsapp: z.string().min(1, "WhatsApp number is required"),
  email: z.string().email("Please enter a valid email"),
  location: z.string().min(1, "Current location is required"),
  officeAttendance: z.string().min(1, "Please select an option"),
  experience: z.string().min(1, "Please select your experience level"),
  aiTools: z.array(z.string()).min(1, "Please select at least one AI tool"),
  editingSoftware: z
    .array(z.string())
    .min(1, "Please select at least one software"),
  ugcExperience: z.string().min(1, "Please select an option"),
  portfolioLink: z.string().optional(),
  joinTimeline: z.string().min(1, "Please select a timeline"),
  expectedSalary: z.string().min(1, "Please enter your expected salary"),
  motivation: z.string().min(10, "Please write at least 10 characters"),
  acceptance: z
    .boolean()
    .refine((val) => val === true, "You must accept this condition"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const AI_TOOLS = [
  "Kling AI",
  "Heygen",
  "Runway ML",
  "Viggle",
  "VEO 3",
  "ChatGPT for video scripting",
  "Midjourney/Stable Diffusion",
  "None — I don't use AI tools yet",
];

const EDITING_SOFTWARE = [
  "Adobe Premiere Pro",
  "After Effects",
  "Final Cut Pro",
  "DaVinci Resolve",
  "CapCut",
  "Other",
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Careers — Nexera App Studio";
    return () => {
      document.title = "Nexera App Studio — Building Tomorrow's Top Apps, Today";
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen px-4 pt-32 pb-20 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <span className="text-hero-muted text-base font-normal leading-relaxed">
              Careers
            </span>
            <h1 className="text-hero-foreground text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight mt-4">
              Video Editor (AI Ads) — Thane Office
            </h1>
            <p className="text-hero-muted text-lg font-normal leading-relaxed mt-6 max-w-3xl">
              We're hiring AI-native video editors who can create 25+
              e-commerce ads on a daily basis using cutting-edge AI tools.
            </p>

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: MapPin, text: "Thane, Mumbai" },
                { icon: Calendar, text: "6 days/week (Sun off)" },
                { icon: Clock, text: "10am — 7pm" },
                { icon: IndianRupee, text: "₹25,000 — ₹30,000/mo" },
              ].map((pill) => (
                <div
                  key={pill.text}
                  className="flex items-center gap-2 px-4 py-3 bg-hero-badge-bg border border-hero-badge-border rounded-2xl backdrop-blur-md"
                >
                  <pill.icon className="w-4 h-4 text-hero-foreground" />
                  <span className="text-hero-badge-text text-sm">
                    {pill.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Warning box */}
            <div className="mt-8 p-5 rounded-2xl border border-hero-secondary-border bg-hero-secondary-bg/5">
              <p className="text-hero-foreground text-sm font-normal leading-relaxed">
                This is an <strong>ON-SITE ROLE</strong> in Thane, Mumbai. 6
                days per week (Sunday off). No remote work. No hybrid options.
                No exceptions. If you cannot come to Thane office daily, please
                do not apply.
              </p>
            </div>

            {/* Apply CTA */}
            <Button
              variant="hero"
              className="mt-10"
              onClick={() => setIsModalOpen(true)}
            >
              Apply Now
            </Button>
          </div>

          {/* Job Description */}
          <div className="space-y-14">
            {/* Responsibilities */}
            <DescriptionSection
              icon={Video}
              title="What You'll Do"
              items={[
                "Produce 25+ UGC-style e-commerce video ads daily using AI-powered workflows",
                "Leverage tools like Kling AI, Heygen, Runway ML, and Viggle to generate video content at scale",
                "Generate multiple video iterations per product using Premiere Pro",
                "Develop scripts and concepts with ChatGPT/Claude assistance",
                "Collaborate with media buyers and other editors to optimize ad performance",
              ]}
            />

            {/* Requirements */}
            <DescriptionSection
              icon={Briefcase}
              title="What We're Looking For"
              items={[
                "Hands-on experience with AI video generation tools (Kling AI, Heygen, Runway, etc.)",
                "Proficiency in professional editing software — Premiere Pro, After Effects, or DaVinci Resolve",
                "Prior experience creating UGC-style advertisements",
                "Ability to work at a fast pace and produce high-volume output without sacrificing quality",
                "Available to join within 15 days",
              ]}
            />

            {/* What we offer */}
            <DescriptionSection
              icon={Sparkles}
              title="What You'll Get"
              items={[
                "₹25,000 — ₹30,000 monthly salary, contingent on speed and quality metrics",
                "Performance bonuses for high-performing ad creation",
                "Accelerated learning in cutting-edge AI video production tools",
                "Collaborative team environment with media buyers and editors",
                "Opportunity to be at the forefront of AI-native content creation",
              ]}
            />

            {/* Team */}
            <DescriptionSection
              icon={Users}
              title="The Environment"
              items={[
                "Fast-paced, high-volume production studio",
                "Work alongside a team that ships daily — not weekly",
                "Direct exposure to what works in paid social advertising",
                "Thane office, conveniently located near Thane station",
              ]}
            />
          </div>

          {/* Bottom Apply CTA */}
          <div className="mt-20 pt-12 border-t border-hero-secondary-border">
            <h2 className="text-hero-foreground text-3xl lg:text-4xl font-normal leading-tight">
              Ready to create at scale?
            </h2>
            <p className="text-hero-muted text-base font-normal leading-relaxed mt-4 max-w-xl">
              If you thrive in fast-paced environments and love pushing the
              boundaries of AI-powered content, we want to hear from you.
            </p>
            <Button
              variant="hero"
              className="mt-8"
              onClick={() => setIsModalOpen(true)}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>
      <Footer />

      {/* Application Modal */}
      <ApplicationModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
};

// ---------------------------------------------------------------------------
// Job description section component
// ---------------------------------------------------------------------------

interface DescriptionSectionProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
}

const DescriptionSection = ({
  icon: Icon,
  title,
  items,
}: DescriptionSectionProps) => (
  <div>
    <div className="flex items-center gap-3 mb-5">
      <Icon className="w-5 h-5 text-hero-foreground" />
      <h2 className="text-hero-foreground text-2xl font-normal">{title}</h2>
    </div>
    <ul className="space-y-3 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-hero-muted mt-1.5 shrink-0">•</span>
          <span className="text-hero-muted text-base leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

// ---------------------------------------------------------------------------
// Application modal
// ---------------------------------------------------------------------------

interface ApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MIN_SUBMIT_TIME_MS = 5000;

const ApplicationModal = ({ open, onOpenChange }: ApplicationModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiTools, setAiTools] = useState<string[]>([]);
  const [editingSoftware, setEditingSoftware] = useState<string[]>([]);
  const [openedAt] = useState(() => Date.now());

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      aiTools: [],
      editingSoftware: [],
      acceptance: false,
    },
  });

  const toggleCheckbox = (
    list: string[],
    setList: (val: string[]) => void,
    field: "aiTools" | "editingSoftware",
    value: string
  ) => {
    const updated = list.includes(value)
      ? list.filter((item) => item !== value)
      : [...list, value];
    setList(updated);
    setValue(field, updated, { shouldValidate: true });
  };

  const onSubmit = async (data: ApplicationFormData) => {
    // Honeypot check — hidden field should be empty
    const honeypot = (document.getElementById("website_url") as HTMLInputElement)?.value;
    if (honeypot) return;

    // Time check — reject if submitted faster than a human could
    if (Date.now() - openedAt < MIN_SUBMIT_TIME_MS) {
      toast({
        title: "Please slow down",
        description: "You submitted too quickly. Please review your answers.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await submitToLarkBase({
        "Full Name": data.fullName,
        "WhatsApp Number": data.whatsapp,
        "Email": data.email,
        "Current Location": data.location,
        "Office Attendance": data.officeAttendance,
        "Years of Experience": data.experience,
        "AI Tools": data.aiTools,
        "Editing Software": data.editingSoftware,
        "UGC Experience": data.ugcExperience,
        "Portfolio Link": data.portfolioLink || "",
        "Join Timeline": data.joinTimeline,
        "Expected Salary": Number(data.expectedSalary),
        "Motivation": data.motivation,
      });
      toast({
        title: "Application submitted!",
        description:
          "We'll review your application and get back to you soon.",
      });
      reset();
      setAiTools([]);
      setEditingSoftware([]);
      onOpenChange(false);
    } catch {
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border-hero-secondary-border text-hero-foreground p-0">
        {/* Sticky header */}
        <div className="sticky top-0 z-10 bg-[#0a0a0a] border-b border-hero-secondary-border px-6 py-5">
          <DialogHeader>
            <DialogTitle className="text-hero-foreground text-xl font-normal">
              Apply — Video Editor (AI Ads)
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Scrollable form body */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-7 px-6 pb-8 pt-4"
        >
          {/* Honeypot — invisible to humans, bots will fill it */}
          <div aria-hidden="true" className="absolute opacity-0 h-0 overflow-hidden pointer-events-none" tabIndex={-1}>
            <label htmlFor="website_url">Website</label>
            <input type="text" id="website_url" name="website_url" autoComplete="off" tabIndex={-1} />
          </div>

          {/* Full Name */}
          <FormField
            label="Full Name"
            error={errors.fullName?.message}
            required
          >
            <Input
              {...register("fullName")}
              placeholder="Your full name"
              className="bg-hero-secondary-bg/5 border-hero-secondary-border text-hero-foreground placeholder:text-hero-muted/50"
            />
          </FormField>

          {/* WhatsApp */}
          <FormField
            label="WhatsApp Number"
            error={errors.whatsapp?.message}
            required
          >
            <Input
              {...register("whatsapp")}
              placeholder="+91 9876543210"
              className="bg-hero-secondary-bg/5 border-hero-secondary-border text-hero-foreground placeholder:text-hero-muted/50"
            />
          </FormField>

          {/* Email */}
          <FormField label="Email" error={errors.email?.message} required>
            <Input
              {...register("email")}
              type="email"
              placeholder="you@example.com"
              className="bg-hero-secondary-bg/5 border-hero-secondary-border text-hero-foreground placeholder:text-hero-muted/50"
            />
          </FormField>

          {/* Location */}
          <FormField
            label="Current Location"
            error={errors.location?.message}
            required
          >
            <Input
              {...register("location")}
              placeholder="City, State"
              className="bg-hero-secondary-bg/5 border-hero-secondary-border text-hero-foreground placeholder:text-hero-muted/50"
            />
          </FormField>

          {/* Office Attendance */}
          <FormField
            label="Can you come to Thane office 6 days/week?"
            error={errors.officeAttendance?.message}
            required
          >
            <RadioGroup
              onValueChange={(val) =>
                setValue("officeAttendance", val, { shouldValidate: true })
              }
              className="space-y-3"
            >
              <RadioOption
                value="yes"
                id="attendance-yes"
                label="Yes, I can come daily to Thane office"
              />
              <RadioOption
                value="no"
                id="attendance-no"
                label="No, I need remote/hybrid"
              />
            </RadioGroup>
          </FormField>

          {/* Experience */}
          <FormField
            label="Years of video editing experience"
            error={errors.experience?.message}
            required
          >
            <Select
              onValueChange={(val) =>
                setValue("experience", val, { shouldValidate: true })
              }
            >
              <SelectTrigger className="bg-hero-secondary-bg/5 border-hero-secondary-border text-hero-foreground">
                <SelectValue placeholder="Select experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                <SelectItem value="1-2">1–2 years</SelectItem>
                <SelectItem value="2-3">2–3 years</SelectItem>
                <SelectItem value="3+">3+ years</SelectItem>
              </SelectContent>
            </Select>
          </FormField>

          {/* AI Tools */}
          <FormField
            label="Which AI video tools do you currently use? (Select all)"
            error={errors.aiTools?.message}
            required
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AI_TOOLS.map((tool) => (
                <CheckboxOption
                  key={tool}
                  id={`ai-${tool}`}
                  label={tool}
                  checked={aiTools.includes(tool)}
                  onChange={() =>
                    toggleCheckbox(aiTools, setAiTools, "aiTools", tool)
                  }
                />
              ))}
            </div>
          </FormField>

          {/* Editing Software */}
          <FormField
            label="Which editing software do you use daily? (Select all)"
            error={errors.editingSoftware?.message}
            required
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EDITING_SOFTWARE.map((sw) => (
                <CheckboxOption
                  key={sw}
                  id={`sw-${sw}`}
                  label={sw}
                  checked={editingSoftware.includes(sw)}
                  onChange={() =>
                    toggleCheckbox(
                      editingSoftware,
                      setEditingSoftware,
                      "editingSoftware",
                      sw
                    )
                  }
                />
              ))}
            </div>
          </FormField>

          {/* UGC Experience */}
          <FormField
            label="Have you created UGC-style ads before?"
            error={errors.ugcExperience?.message}
            required
          >
            <RadioGroup
              onValueChange={(val) =>
                setValue("ugcExperience", val, { shouldValidate: true })
              }
              className="space-y-3"
            >
              {[
                { value: "regularly", label: "Yes, I create them regularly" },
                { value: "few-times", label: "Yes, but only a few times" },
                { value: "can-learn", label: "No, but I can learn" },
                {
                  value: "no-idea",
                  label: "No, I don't know what UGC is",
                },
              ].map((opt) => (
                <RadioOption
                  key={opt.value}
                  value={opt.value}
                  id={`ugc-${opt.value}`}
                  label={opt.label}
                />
              ))}
            </RadioGroup>
          </FormField>

          {/* Portfolio */}
          <FormField label="Portfolio/Reel Link (Google Drive or YouTube — Optional)">
            <Input
              {...register("portfolioLink")}
              placeholder="https://..."
              className="bg-hero-secondary-bg/5 border-hero-secondary-border text-hero-foreground placeholder:text-hero-muted/50"
            />
          </FormField>

          {/* Join Timeline */}
          <FormField
            label="Can you join within 15 days?"
            error={errors.joinTimeline?.message}
            required
          >
            <RadioGroup
              onValueChange={(val) =>
                setValue("joinTimeline", val, { shouldValidate: true })
              }
              className="space-y-3"
            >
              {[
                { value: "immediately", label: "Yes, available immediately" },
                { value: "7-days", label: "Yes, within 7 days" },
                { value: "30-plus", label: "No, need 30+ days" },
              ].map((opt) => (
                <RadioOption
                  key={opt.value}
                  value={opt.value}
                  id={`join-${opt.value}`}
                  label={opt.label}
                />
              ))}
            </RadioGroup>
          </FormField>

          {/* Expected Salary */}
          <FormField
            label="Expected Monthly Salary (in ₹)"
            error={errors.expectedSalary?.message}
            required
          >
            <Input
              {...register("expectedSalary")}
              type="number"
              placeholder="30000"
              className="bg-hero-secondary-bg/5 border-hero-secondary-border text-hero-foreground placeholder:text-hero-muted/50"
            />
          </FormField>

          {/* Motivation */}
          <FormField
            label="Why do you want to work in a fast-paced, high-volume environment?"
            error={errors.motivation?.message}
            required
          >
            <Textarea
              {...register("motivation")}
              placeholder="Tell us what excites you about this role..."
              rows={4}
              className="bg-hero-secondary-bg/5 border-hero-secondary-border text-hero-foreground placeholder:text-hero-muted/50 resize-none"
            />
          </FormField>

          {/* Acceptance */}
          <FormField error={errors.acceptance?.message}>
            <div className="flex items-start gap-3">
              <Checkbox
                id="acceptance"
                checked={watch("acceptance")}
                onCheckedChange={(checked) =>
                  setValue("acceptance", checked === true, {
                    shouldValidate: true,
                  })
                }
                className="mt-1"
              />
              <Label
                htmlFor="acceptance"
                className="text-hero-muted text-base font-normal cursor-pointer leading-relaxed"
              >
                I understand and accept on-site work at Thane office, 6
                days/week
              </Label>
            </div>
          </FormField>

          {/* Submit */}
          <Button
            type="submit"
            variant="hero"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// ---------------------------------------------------------------------------
// Shared small components
// ---------------------------------------------------------------------------

interface FormFieldProps {
  label?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

const FormField = ({ label, error, required, children }: FormFieldProps) => (
  <div className="space-y-2">
    {label && (
      <Label className="text-hero-foreground text-base font-normal">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
    )}
    {children}
    {error && <p className="text-destructive text-sm">{error}</p>}
  </div>
);

const RadioOption = ({
  value,
  id,
  label,
}: {
  value: string;
  id: string;
  label: string;
}) => (
  <div className="flex items-center gap-3">
    <RadioGroupItem value={value} id={id} />
    <Label
      htmlFor={id}
      className="text-hero-muted text-base font-normal cursor-pointer"
    >
      {label}
    </Label>
  </div>
);

const CheckboxOption = ({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) => (
  <div className="flex items-center gap-3">
    <Checkbox id={id} checked={checked} onCheckedChange={onChange} />
    <Label
      htmlFor={id}
      className="text-hero-muted text-sm font-normal cursor-pointer"
    >
      {label}
    </Label>
  </div>
);

export default Careers;
