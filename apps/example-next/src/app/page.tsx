import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
  Progress,
  Separator,
  Skeleton,
  Slider,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toggle,
} from "@kapao-kit/ui";
import { Bold } from "lucide-react";
import { DialogExample } from "@/components/examples/dialog-example";
import { SelectExample } from "@/components/examples/select-example";
import { ToastExample } from "@/components/examples/toast-example";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <Separator />
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">@kapao-kit/ui</h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          A customizable UI component library built on shadcn/ui, Radix UI, and
          Tailwind CSS v4.
        </p>
      </div>

      {/* Buttons */}
      <Section title="Button">
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Bold className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* Input & Textarea */}
      <Section title="Input & Textarea">
        <div className="grid grid-cols-2 gap-4 max-w-lg">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
        </div>
        <div className="max-w-lg space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here..." />
        </div>
      </Section>

      {/* Checkbox & Switch */}
      <Section title="Checkbox & Switch">
        <div className="flex items-center gap-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </div>
      </Section>

      {/* Select & Dialog */}
      <Section title="Select & Dialog">
        <div className="flex flex-wrap gap-4">
          <SelectExample />
          <DialogExample />
        </div>
      </Section>

      {/* Slider */}
      <Section title="Slider">
        <div className="max-w-sm">
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </Section>

      {/* Toggle */}
      <Section title="Toggle">
        <div className="flex gap-4">
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
        </div>
      </Section>

      {/* Card */}
      <Section title="Card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content with useful information.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">shadcn</p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Great library!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Badge */}
      <Section title="Badge">
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </Section>

      {/* Alert */}
      <Section title="Alert">
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components from @kapao-kit/ui to your apps.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went wrong. Please try again.
          </AlertDescription>
        </Alert>
      </Section>

      {/* Avatar */}
      <Section title="Avatar">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      </Section>

      {/* Tabs */}
      <Section title="Tabs">
        <Tabs defaultValue="overview" className="w-100">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>
                  View your key metrics and recent project activity. Track
                  progress across all your active projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                You have 12 active projects and 3 pending tasks.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  Track performance and user engagement metrics. Monitor trends
                  and identify growth opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Page views are up 25% compared to last month.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>
                  Generate and download your detailed reports. Export data in
                  multiple formats for analysis.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                You have 5 reports ready and available to export.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>
                  Manage your account preferences and options. Customize your
                  experience to fit your needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Configure notifications, security, and themes.
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Accordion */}
      <Section title="Accordion">
        <Accordion type="single" collapsible className="max-w-lg">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match your theme.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default with smooth transitions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* Table */}
      <Section title="Table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>
                <Badge>Paid</Badge>
              </TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV002</TableCell>
              <TableCell>
                <Badge variant="secondary">Pending</Badge>
              </TableCell>
              <TableCell>PayPal</TableCell>
              <TableCell className="text-right">$150.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV003</TableCell>
              <TableCell>
                <Badge variant="destructive">Unpaid</Badge>
              </TableCell>
              <TableCell>Bank Transfer</TableCell>
              <TableCell className="text-right">$350.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Section>

      {/* Progress */}
      <Section title="Progress">
        <div className="max-w-sm space-y-4">
          <Progress value={33} />
          <Progress value={66} />
          <Progress value={100} />
        </div>
      </Section>

      {/* Skeleton */}
      <Section title="Skeleton">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-62.5" />
            <Skeleton className="h-4 w-50" />
          </div>
        </div>
      </Section>

      {/* Toast */}
      <Section title="Toast (Sonner)">
        <ToastExample />
      </Section>

      <Separator />
      <footer className="text-center text-sm text-[hsl(var(--muted-foreground))] pb-8">
        Built with @kapao-kit/ui — A shadcn/ui based component library
      </footer>
    </main>
  );
}
