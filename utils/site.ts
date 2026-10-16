export const contact = {
  email: 'info@ttriangleltd.com',
  ng: { address: '32 Modupe Young Street, Thomas, Ajah, Lekki-Epe Expressway, Lagos, Nigeria', phone: '+234 906 818 5433' },
  na: { address: '147 Sam Nujoma Avenue, Walvis Bay, Namibia', phone: '+264 81 844 1704' }
} // verify all details before launch

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services', children: true },
  { label: 'Specialised OEM Services', to: '/oem' },
  { label: 'Projects', to: '/projects' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact Us', to: '/contact' }
]

export const services = [
  { slug: 'valve-optimisation-solutions', name: 'Valve Optimisation Solutions',
    short: 'Valve procurement and relevant maintenance, inspection, repair and optimisation support.',
    headline: 'Engineered valve solutions. Reliable performance. Operational confidence.',
    intro: 'Valves are critical to flow control, process isolation and reliable plant operation. T Triangle Limited supports valve-related procurement and confirmed technical services based on the application, operating conditions and equipment requirement.',
    scope: ['Valve procurement against approved specifications', 'Inspection and condition assessment', 'Troubleshooting', 'Maintenance, repair or refurbishment within confirmed scope', 'Valve interlocking, sealing and actuator-related support', 'Coordination with approved OEMs'],
    enquiry: 'Valve type, size, pressure class, medium, material, actuator details, quantity, operating conditions and location.' },
  { slug: 'fluid-transfer-solutions', name: 'Fluid Transfer Solutions',
    short: 'Pump and fluid-transfer equipment, pipeline pigging and related support.',
    headline: 'Fluid transfer equipment and pipeline support for demanding operations.',
    intro: 'Reliable fluid transfer depends on equipment suited to the fluid, flow requirement, pressure and site conditions. We support defined pump and fluid-transfer requirements alongside pipeline pigging within our confirmed scope.',
    scope: ['Industrial pump supply and sourcing', 'Pump rental and service where available', 'Fluid-transfer equipment', 'Pipeline pigging equipment and services', 'Pipeline cleaning and maintenance support'],
    enquiry: 'Fluid, flow rate, required head/pressure, temperature, solids content, connections, site conditions, duration and start date.' },
  { slug: 'compressed-air-solutions', name: 'Compressed Air Solutions',
    short: 'Compressor equipment, service and rental where available.',
    headline: 'Compressed-air equipment, service and rental support.',
    intro: 'Compressed air supports industrial tools, instruments and processes. We support defined compressed-air equipment requirements, with service and rental subject to availability and application needs.',
    scope: ['Compressor supply or sourcing', 'Compressor rental where available', 'Service and maintenance within confirmed capability', 'Selection by pressure, flow, air quality and duty cycle', 'Project-specific coordination'],
    enquiry: 'Pressure and flow, air quality, duty cycle, power supply, site conditions, rental duration, location and target date.' },
  { slug: 'bolting-torquing-solutions', name: 'Bolting & Torquing Solutions',
    short: 'Controlled tightening equipment and related technical support.',
    headline: 'Controlled tightening solutions for critical bolted connections.',
    intro: 'Bolted joints require appropriate tools and methods to meet specified joint requirements. We support bolting and torquing requirements with equipment and technical options matched to the joint and project.',
    scope: ['Bolting and torquing equipment procurement', 'Alkitronic-related solutions where authorised', 'Tool selection support', 'Service or rental only where confirmed', 'Technical coordination for flange and bolted-joint work'],
    enquiry: 'Bolt size and grade, joint/flange details, target torque or tension, access constraints, location and deadline.' },
  { slug: 'flange-management-services', name: 'Flange Management Services',
    short: 'Flange-facing, cold-cutting and related flange management solutions.',
    headline: 'Practical support for flange preparation and joint integrity.',
    intro: 'Flange and bolted-joint work requires suitable tooling, preparation and attention to mating-surface condition. We support flange management through flange-facing and cold-cutting machines, tools and technical services within confirmed scope.',
    scope: ['Flange-facing machines and tools', 'Cold-cutting machines and tools', 'Equipment sourcing and application review', 'Support for maintenance, shutdown and project work', 'Coordination with bolting and torquing'],
    enquiry: 'Flange size/rating, material, work scope, access, required finish/tolerance, location and timeline.' },
  { slug: 'pressure-test-solutions', name: 'Pressure Test Solutions',
    short: 'Equipment and support for defined pressure-testing requirements.',
    headline: 'Equipment and support for defined pressure-testing requirements.',
    intro: 'Pressure testing can help verify equipment or system integrity before service or after maintenance. The right method depends on system design, test medium, governing procedure and site conditions.',
    scope: ['Review of requested test scope and procedure', 'Equipment provision where available', 'Coordination of pressure, connections and logistics', 'Documentation where included in agreed scope', 'Planning with client engineering and safety teams'],
    enquiry: 'System/equipment, test pressure, medium, volume, temperature, code/procedure, connections, location and documentation needs.' },
  { slug: 'touchpoint-engineering-access-creation', name: 'Touchpoint Engineering & Access Creation (CUPS Remediation)',
    short: 'Specialist engineering and access support; exact scope to be confirmed.',
    headline: 'Specialist engineering support for defined access and remediation challenges.',
    intro: 'Maintenance and remediation can be complicated by access constraints and site-specific conditions. We support defined engineering and access-creation requirements within the approved scope of each project.',
    scope: ['Initial review of the access or remediation challenge', 'Site and technical requirement review', 'Engineering coordination and scope definition', 'Support where approved method and capability apply', 'Coordination with operations, maintenance and HSE teams'],
    enquiry: 'Asset, access challenge, location, photos/drawings, operating status, hazards, desired outcome and schedule.' },
  { slug: 'safe-isolation-solutions', name: 'Safe Isolation Solutions',
    short: 'Technologies and support for appropriate isolation requirements.',
    headline: 'Safe-isolation solutions for controlled maintenance and operations.',
    intro: 'Safe isolation is essential when equipment must be maintained or inspected. The right solution depends on the process, isolation philosophy, risk assessment and approved procedures.',
    scope: ['Review of safe-isolation requirements', 'Passing-valve isolation technologies, once offering and role are confirmed', 'Valve interlocking where applicable', 'Technical coordination to assess options', 'Clear split between technology supply and field services'],
    enquiry: 'System/application, isolation challenge, valve/process details, pressure/medium, site conditions, procedure requirements and timeline.' }
]

export const partners = ['Valvetight', 'Alcatraz', 'Ovolift', 'MODEC', 'Alkitronic', 'Linerider']

export const markets = ['Oil & Gas', 'Energy & Power', 'Industrial & Manufacturing', 'Marine & Offshore', 'Construction & Process Industries']

export const why = [
  ['Application-led support', 'We understand the requirement, operating conditions and intended outcome first.'],
  ['Equipment & technical coordination', 'We help identify suitable products, equipment and specialist options.'],
  ['Safety-conscious delivery', 'We consider work scope, site requirements and technical documentation.'],
  ['Relevant technical partnerships', 'We work with approved OEMs and technology partners where applicable.'],
  ['Clear communication', 'Sharing specifications and progressing an enquiry is straightforward.']
]

export const insightCategories = ['Technical Articles', 'Maintenance & Reliability', 'Technology Explained', 'Industry News', 'Project Insights', 'Safety & Standards']

// Sample placeholders taken from the brief's example topics, replace with real articles
export const insights = [
  { title: '5 Signs an Industrial Valve Needs Attention', cat: 'Technical Articles', date: 'Sample' },
  { title: 'Preparing for a Planned Shutdown', cat: 'Maintenance & Reliability', date: 'Sample' },
  { title: 'What Is Pipeline Pigging?', cat: 'Technology Explained', date: 'Sample' },
  { title: 'Why Flange Leaks Occur', cat: 'Technical Articles', date: 'Sample' },
  { title: 'When Is Controlled Bolting Used?', cat: 'Technology Explained', date: 'Sample' },
  { title: 'Preventive vs Reactive Maintenance', cat: 'Maintenance & Reliability', date: 'Sample' }
]
