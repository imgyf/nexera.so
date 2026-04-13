import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
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
} from "lucide-react";

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const applicationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  whatsapp: z
    .string()
    .min(1, "WhatsApp number is required")
    .refine((v) => isValidPhoneNumber(v), "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  location: z.string().min(1, "Current location is required"),
  experience: z.string().min(1, "Please select your experience level"),
  aiTools: z.array(z.string()).min(1, "Please select at least one AI tool"),
  editingSoftware: z
    .array(z.string())
    .min(1, "Please select at least one software"),
  shortFormExperience: z.string().min(1, "Please select an option"),
  portfolioLink: z
    .string()
    .min(1, "Portfolio link is required")
    .url("Please enter a valid URL"),
  joinTimeline: z.string().min(1, "Please select a timeline"),
  expectedSalary: z.string().min(1, "Please enter your expected salary"),
  motivation: z.string().min(10, "Please write at least 10 characters"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const AI_TOOLS = [
  "Kling AI",
  "Seeddance 2.0",
  "Heygen",
  "Runway ML",
  "Viggle",
  "VEO 3",
  "ChatGPT for video scripting",
  "Midjourney/Stable Diffusion",
  "Gemini Nanobanana",
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
              Short-Form Video Editor
            </h1>
            <p className="text-hero-muted text-lg font-normal leading-relaxed mt-6 max-w-3xl">
              Create engaging, fast-paced vertical content (Instagram Reels,
              TikToks, YouTube Shorts) for our AI, business, and tech brand —
              with an editing style built to maximize viewer retention.
            </p>

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: MapPin, text: "Virtual / Remote" },
                { icon: Calendar, text: "6 days/week (Sun off)" },
                { icon: Clock, text: "10am — 7pm" },
                { icon: IndianRupee, text: "₹30,000 — ₹40,000/mo" },
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

            {/* Note box */}
            <div className="mt-8 p-5 rounded-2xl border border-hero-secondary-border bg-hero-secondary-bg/5">
              <p className="text-hero-foreground text-sm font-normal leading-relaxed">
                <strong>Heads up:</strong> Basic auto-generated CapCut templates
                will not be sufficient for this role. We're looking for editors
                who can craft custom, dynamic edits using Premiere Pro and After
                Effects (or DaVinci Resolve).
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
            <DescriptionSection
              icon={Video}
              title="What You'll Do"
              items={[
                "Create highly engaging, fast-paced vertical content for Instagram Reels, TikTok, and YouTube Shorts",
                "Build custom, dynamic, word-by-word animated subtitles with engaging fonts, keyword color highlights, and relevant emojis",
                "Add pop-up graphics, object tracking, and smooth custom transitions to keep viewers anchored to the screen",
                "Integrate AI-generated B-roll, screen recordings, images, and other assets to visually back up the speaker's point",
                "Apply high-quality sound effects (whooshes, pops, risers, typing sounds) to elevate production value",
              ]}
            />

            <DescriptionSection
              icon={Briefcase}
              title="What We're Looking For"
              items={[
                "Proficiency in Adobe Premiere Pro and After Effects (or DaVinci Resolve) — not just CapCut templates",
                "Deep understanding of modern social media algorithms, pacing, and what keeps a viewer engaged in the first 3 seconds",
                "Comfort working in a fast-moving, feedback-driven environment",
                "Ability to manage multiple projects and consistently meet deadlines",
                "Excellent attention to detail in audio syncing, color grading, and sound design",
                "Fluent in English with strong context awareness for highlighting the right caption keywords",
              ]}
            />

            <DescriptionSection
              icon={Sparkles}
              title="What You'll Get"
              items={[
                "₹30,000 — ₹40,000 monthly, based on speed and quality",
                "Work closely with experienced editors and content leaders — regular feedback, guidance, and mentorship",
                "Sharpen your storytelling instincts, technical ability, and creative judgment on real, shipping content",
                "Increased responsibility and influence as the content operation scales — high performers move up fast",
              ]}
            />

            <DescriptionSection
              icon={Users}
              title="The Environment"
              items={[
                "Fully virtual — work from wherever you are",
                "6 days per week (Sunday off), 10am — 7pm",
                "Fast feedback loops with content leaders who ship daily",
                "Direct exposure to what actually performs on short-form platforms",
              ]}
            />

            {/* Video Examples */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Video className="w-5 h-5 text-hero-foreground" />
                <h2 className="text-hero-foreground text-2xl font-normal">
                  Editing Style Reference
                </h2>
              </div>
              <p className="text-hero-muted text-base leading-relaxed mb-5">
                These are the kind of edits we're looking for — pacing, hooks,
                motion, and caption style:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { type: "p", id: "DTrrJfXgI3d" },
                  { type: "p", id: "DWQR6QjDQj4" },
                  { type: "p", id: "DWtv8amiOj4" },
                  { type: "p", id: "DWWEajRAb0f" },
                  { type: "p", id: "DLP_LZTstlQ" },
                  { type: "reel", id: "DW1xMPZjpkt" },
                ].map(({ type, id }) => (
                  <div
                    key={id}
                    className="overflow-hidden rounded-2xl border border-hero-badge-border bg-hero-badge-bg"
                  >
                    <iframe
                      src={`https://www.instagram.com/${type}/${id}/embed`}
                      loading="lazy"
                      title={`Instagram ${type} ${id}`}
                      allow="encrypted-media"
                      scrolling="no"
                      className="w-full h-[640px] border-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Apply CTA */}
          <div className="mt-20 pt-12 border-t border-hero-secondary-border">
            <h2 className="text-hero-foreground text-3xl lg:text-4xl font-normal leading-tight">
              Ready to create scroll-stopping content?
            </h2>
            <p className="text-hero-muted text-base font-normal leading-relaxed mt-4 max-w-xl">
              If you live and breathe short-form video and love pushing the
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
    const honeypot = (document.getElementById("website_url") as HTMLInputElement)?.value;
    if (honeypot) return;

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
        "Years of Experience": data.experience,
        "AI Tools": data.aiTools,
        "Editing Software": data.editingSoftware,
        "Short Form Experience": data.shortFormExperience,
        "Portfolio Link": data.portfolioLink,
        "Join Timeline": data.joinTimeline,
        "Expected Salary": Number(data.expectedSalary),
        "Motivation": data.motivation,
      });
      window.fbq?.("track", "Lead");
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
        <div className="sticky top-0 z-10 bg-[#0a0a0a] border-b border-hero-secondary-border px-6 py-5">
          <DialogHeader>
            <DialogTitle className="text-hero-foreground text-xl font-normal">
              Apply — Short-Form Video Editor
            </DialogTitle>
          </DialogHeader>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-7 px-6 pb-8 pt-4"
        >
          {/* Honeypot */}
          <div aria-hidden="true" className="absolute opacity-0 h-0 overflow-hidden pointer-events-none" tabIndex={-1}>
            <label htmlFor="website_url">Website</label>
            <input type="text" id="website_url" name="website_url" autoComplete="off" tabIndex={-1} />
          </div>

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

          <FormField
            label="WhatsApp Number"
            error={errors.whatsapp?.message}
            required
          >
            <PhoneInput
              international
              defaultCountry="IN"
              value={watch("whatsapp")}
              onChange={(val) =>
                setValue("whatsapp", val ?? "", { shouldValidate: true })
              }
              className="nexera-phone-input"
              placeholder="9876543210"
            />
          </FormField>

          <FormField label="Email" error={errors.email?.message} required>
            <Input
              {...register("email")}
              type="email"
              placeholder="you@example.com"
              className="bg-hero-secondary-bg/5 border-hero-secondary-border text-hero-foreground placeholder:text-hero-muted/50"
            />
          </FormField>

          <FormField
            label="Current Location"
            error={errors.location?.message}
            required
          >
            <Input
              {...register("location")}
              placeholder="City, Country"
              className="bg-hero-secondary-bg/5 border-hero-secondary-border text-hero-foreground placeholder:text-hero-muted/50"
            />
          </FormField>

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

          <FormField
            label="Have you created short-form content before?"
            error={errors.shortFormExperience?.message}
            required
          >
            <RadioGroup
              onValueChange={(val) =>
                setValue("shortFormExperience", val, { shouldValidate: true })
              }
              className="space-y-3"
            >
              {[
                { value: "regularly", label: "Yes, I create them regularly" },
                { value: "few-times", label: "Yes, only a few times" },
                { value: "can-learn", label: "No, but I can learn" },
                {
                  value: "no-idea",
                  label: "No, I don't know what short-form content is",
                },
              ].map((opt) => (
                <RadioOption
                  key={opt.value}
                  value={opt.value}
                  id={`sf-${opt.value}`}
                  label={opt.label}
                />
              ))}
            </RadioGroup>
          </FormField>

          <FormField
            label="Portfolio of videos you've edited (Google Drive, YouTube, or Instagram link)"
            error={errors.portfolioLink?.message}
            required
          >
            <Input
              {...register("portfolioLink")}
              placeholder="https://..."
              className="bg-hero-secondary-bg/5 border-hero-secondary-border text-hero-foreground placeholder:text-hero-muted/50"
            />
          </FormField>

          <FormField
            label="How soon can you join?"
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
                { value: "immediately", label: "Available immediately" },
                { value: "7-days", label: "Within 7 days" },
                { value: "30-days", label: "Within 30 days" },
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

          <FormField
            label="Expected Monthly Salary (in ₹)"
            error={errors.expectedSalary?.message}
            required
          >
            <Input
              {...register("expectedSalary")}
              type="number"
              placeholder="35000"
              className="bg-hero-secondary-bg/5 border-hero-secondary-border text-hero-foreground placeholder:text-hero-muted/50"
            />
          </FormField>

          <FormField
            label="What excites you about short-form editing, and how do you keep viewers engaged?"
            error={errors.motivation?.message}
            required
          >
            <Textarea
              {...register("motivation")}
              placeholder="Tell us about your approach to hooks, pacing, and retention..."
              rows={4}
              className="bg-hero-secondary-bg/5 border-hero-secondary-border text-hero-foreground placeholder:text-hero-muted/50 resize-none"
            />
          </FormField>

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
