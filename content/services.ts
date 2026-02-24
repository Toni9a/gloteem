export interface ServicePillar {
  id: string;
  name: string;
  shortDescription: string;
  targetAudience: string;
  servicesIncluded: string[];
  keyOutcomes: string[];
  icon: string;
}

export const servicePillars: ServicePillar[] = [
  {
    id: 'leadership',
    name: 'Leadership & Organisational Development',
    shortDescription:
      'Build capability, drive performance, and create lasting impact through strategic leadership and organisational transformation.',
    targetAudience:
      'Mid-level managers, emerging leaders, teams navigating change',
    servicesIncluded: [
      'Leadership coaching and executive mentoring',
      'Team development and high-performance culture',
      'Organisational change support and stakeholder engagement',
      'Performance frameworks and accountability systems',
      'Succession planning and leadership pipeline development',
    ],
    keyOutcomes: [
      'Clearer leadership identity and confidence',
      'Stronger team performance and engagement',
      'Structured approach to change management',
      'Improved organisational alignment and culture',
    ],
    icon: 'leadership',
  },
  {
    id: 'startup',
    name: 'Customer Support & Start-up Structure',
    shortDescription:
      'Scale with confidence through operational excellence, customer-centric design, and robust processes.',
    targetAudience:
      'Founders, start-ups, SMEs needing operational structure',
    servicesIncluded: [
      'Customer support design and implementation',
      'Process mapping and workflow optimisation',
      'Operational framework development',
      'Start-up advisory and business structure',
      'Scalability planning and systems design',
    ],
    keyOutcomes: [
      'Scalable, sustainable support systems',
      'Clear internal processes and documentation',
      'Business-ready operations and structure',
      'Improved customer satisfaction and retention',
    ],
    icon: 'startup',
  },
  {
    id: 'care',
    name: 'Care & Health Consultancy',
    shortDescription:
      'Strengthen care delivery through leadership excellence, compliance confidence, and service quality frameworks.',
    targetAudience:
      'Care providers, healthcare organisations, social care teams',
    servicesIncluded: [
      'Compliance advisory and regulatory guidance',
      'Leadership development in care settings',
      'Service excellence and quality frameworks',
      'Care staff training and development',
      'Organisational culture and dignity in care',
    ],
    keyOutcomes: [
      'Improved care delivery standards and outcomes',
      'Stronger leadership culture within care teams',
      'Regulatory confidence and compliance',
      'Enhanced staff wellbeing and retention',
    ],
    icon: 'care',
  },
];

export const serviceIntro = `Gloteem Consulting offers three core pillars of expertise, each designed to address unique organisational challenges and opportunities. All service pricing is on request — we tailor our approach to your specific needs.`;
