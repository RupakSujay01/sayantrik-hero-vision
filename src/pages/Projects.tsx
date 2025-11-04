import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FolderKanban, FileText, Hammer, Container } from "lucide-react";
import oilPlantImage from "@/assets/oil-plant.png";

const Projects = () => {
  const engineeringProjects = [
    {
      name: "600 MTPD Sulphuric Acid (SA - V) Plant",
      scope: "Detailed Engineering",
      description: "Detailed engineering and EPC support for a 600 MTPD Sulphuric Acid Plant, covering high-temperature and low-pressure piping, static equipment design, GA drawings, datasheets, P&IDs, plot plans, MTOs, vendor document review."
    },
    {
      name: "300 MTPD Sulphuric Acid Plant",
      scope: "Detailed Engineering",
      description: "Detailed engineering for a 300 MTPD Sulphuric Acid Plant including civil, structural, piping, electrical, and instrumentation works."
    },
    {
      name: "9 MMTPA CPCL Refinery - Pipelines and Terminals",
      scope: "Detailed Engineering",
      description: "End-to-end detailed engineering for onshore pipelines and terminals at Cauvery Basin Refinery. Scope covered PFDs, P&IDs, datasheets, HAZOP/SIL support, 3D modeling, plot plans, procurement support."
    },
    {
      name: "60MW / 90MW LNG / LPG Storage and Regasification",
      scope: "FEED Plus",
      description: "FEED and engineering services for LNG/LPG storage and regasification plants across 5 European sites. Scope included feasibility validation, process design, vaporization/storage sizing (30–200 MT)."
    },
    {
      name: "15 TPD Green Hydrogen Plant",
      scope: "Pre-FEED",
      description: "Pre-FEED engineering for 15 TPD Green Hydrogen Plant (625 kg/hr) including process design (PFD/P&ID), piping MTOs, civil/structural MTOs, static equipment design, electrical load lists."
    },
    {
      name: "2 TPD Green Hydrogen Plant",
      scope: "Pre-FEED",
      description: "Pre-FEED for 2 TPD Green Hydrogen Plant including PFD/P&ID development, piping MTOs, civil/structural MTOs, electrolyser foundation design, electrical lists, and instrumentation scope."
    },
    {
      name: "Verification of 700 PSVs",
      scope: "Engineering Validation",
      description: "Verification and validation of ~700 PSVs against latest API standards. Delivered detailed compliance reports, gap analysis, and recommendations across 17 operating scenarios."
    },
    {
      name: "Thermal Reactor & Incinerator Package - IOCL SRU",
      scope: "Detailed Engineering",
      description: "Detailed engineering of Thermal Reactor & Incinerator Packages and 40 static equipment units for IOCL SRU. Scope: review of licensor package, 3D model development, datasheets, GA drawings."
    },
    {
      name: "MB-01 Meglumine Project",
      scope: "Basic Engineering",
      description: "Basic engineering for MB-01 Meglumine Project. Scope included process deliverables (P&IDs, line lists), equipment datasheets, piping layouts, BOQs, electrical system design."
    },
    {
      name: "HRRL Refinery TEA Injection",
      scope: "Detailed Engineering",
      description: "Detailed engineering for TEA Injection package at HRRL Refinery. Scope included piping, civil, and structural engineering, vendor document reviews, and coordination with licensor Heurtey."
    },
    {
      name: "AR Ratawi - Gas Midstream Project",
      scope: "Detailed Engineering",
      description: "Pipeline engineering for AR Ratawi Gas Midstream Project (114.9 km). Deliverables: alignment sheets, horizontal/vertical profiles, crossing schedules, condensate pipeline (10\" & 24\")."
    },
    {
      name: "Petrobras P-80 FPSO Project",
      scope: "Detailed Engineering",
      description: "Instrumentation engineering support for Petrobras P-80 FPSO Project in Brazil. Scope included cable scheduling, routing, 3D modeling of tray systems, tray layout sheets."
    },
    {
      name: "Civil Design - EDC Plant",
      scope: "Detailed Engineering",
      description: "Civil & structural engineering design for Tekla for EDC Plant. Scope included modularization design, 3D modeling, pile caps, vent blower sheds, pedestals, and structural detailing."
    },
    {
      name: "Electrical Lighting Layouts - Ammonia Plant",
      scope: "Detailed Engineering",
      description: "Electrical lighting engineering for Ammonia Plant O&U area in Mexico. Scope: lighting design calculations, layouts for 25 areas, illumination reports, and BOQs."
    },
    {
      name: "Vendor Drawing Review - Ammonia Plant",
      scope: "Detailed Engineering",
      description: "Vendor document review of 115 static equipment drawings for Ammonia Plant in Mexico. Scope: GA reviews, detailed drawing checks, and vendor compliance validation."
    },
    {
      name: "Pilot Reactor and Flaker Plant",
      scope: "Detailed Engineering",
      description: "Detailed engineering for Pilot Reactor & Flaker Plant. Scope: basic plant layout, GA drawings, piping/isometrics, civil foundations, structural design, load mapping."
    },
    {
      name: "Agro Pellet Feeding Systems",
      scope: "Detailed Engineering",
      description: "Civil & structural design for Agro Pellet Feeding Systems. Scope included conveyor supports, chute/silo foundations, construction drawings, safety-focused designs."
    },
    {
      name: "Chimney Foundation",
      scope: "Detailed Engineering",
      description: "Civil & structural foundation design for Chimney Project. Delivered foundation analysis, soil condition review, structural drawings, and construction-ready packages."
    },
    {
      name: "Boiler Area External Sheds",
      scope: "Detailed Engineering",
      description: "Engineering and structural design for Boiler Area External Sheds. Scope: foundation design, fire-resistant structures, safety integration, access platforms."
    }
  ];

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <div className="p-3 bg-primary/10 rounded-lg">
            <FolderKanban className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Projects
          </h1>
        </div>

        <Tabs defaultValue="engineering" className="space-y-8">
          <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="engineering">Engineering Projects</TabsTrigger>
            <TabsTrigger value="asbuilt">As-Built Projects</TabsTrigger>
            <TabsTrigger value="fabrication">Steel Fabrication</TabsTrigger>
            <TabsTrigger value="tanks">Storage Tanks</TabsTrigger>
          </TabsList>

          <TabsContent value="engineering" className="space-y-6 relative">
            {/* Watermark */}
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-repeat" 
                 style={{
                   backgroundImage: `url(${oilPlantImage})`,
                   backgroundSize: '200px 200px',
                   backgroundPosition: 'center'
                 }}>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              {/* Oil Plant Image Card */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={oilPlantImage} 
                    alt="Oil Plant" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-center">Oil Plant</h3>
                  </div>
                </CardContent>
              </Card>

              {engineeringProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {project.scope}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="asbuilt">
            <Card>
              <CardHeader>
                <CardTitle>As-Built Engineering Projects</CardTitle>
                <CardDescription>Laser scanning and 3D modelling projects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive as-built documentation services including laser scanning and 3D modeling for various industrial facilities.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fabrication">
            <Card>
              <CardHeader>
                <CardTitle>Steel Fabrication Projects</CardTitle>
                <CardDescription>Custom steel fabrication solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized steel fabrication services for industrial applications across various sectors.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tanks">
            <Card>
              <CardHeader>
                <CardTitle>Storage Tanks Projects</CardTitle>
                <CardDescription>Tank design and engineering services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive storage tank engineering, design, and implementation services.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Projects;
