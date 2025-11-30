import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FolderKanban, FileText, Hammer, Container } from "lucide-react";
import oilPlantImage from "@/assets/oil-plant-hq.jpg";

const Projects = () => {
  const feedProjects = [
    {
      name: "Centralized Wastewater Treatment Plant",
      description: "Development of Preliminary 3D Model and Plot Plan for the Centralized Wastewater Treatment Plant, including major equipment placement and key process lines."
    },
    {
      name: "Water Intake and Pumping Station",
      description: "Conceptual 3D Layout and Feasibility Study model for the Water Intake structure, pump house, and preliminary piping headers."
    }
  ];

  const detailProjects = [
    {
      name: "New 3-Tank MBR Plant for a Textile Mill",
      description: "Complete Detailed Engineering for the new 3-tank MBR Plant in a textile mill, including 3D modeling, GA drawings, Equipment, Piping & Isometrics, Civil & Structural modeling and drawings."
    },
    {
      name: "Effluent Treatment Plant (ETP) Revamp",
      description: "Detailed 3D Modeling and Deliverables for the Effluent Treatment Plant (ETP) Revamp, covering Equipment, Piping, Isometrics, and Structural modeling."
    },
    {
      name: "200 MLD Water Treatment Plant (WTP)",
      description: "Detailed Engineering support including 3D modeling for Equipment, Piping, Structural, and GA drawings for a large 200 MLD WTP project."
    },
    {
      name: "MBR Plant for Municipality",
      description: "Detailed Engineering and 3D modeling for the MBR Plant, which includes Equipment, Piping, and Structural design and documentation."
    },
    {
      name: "Pre-Fabricated WTP for Power Plant",
      description: "3D Modeling & Detailed Engineering for a skid-mounted, pre-fabricated WTP for a power plant, including Equipment, Process Piping, and Instrumentation layout."
    },
    {
      name: "Demineralization (DM) Plant",
      description: "Detailed Engineering and 3D model preparation for the Demineralization Plant, including all associated Equipment, Interconnecting Piping, and Structural elements."
    }
  ];

  const asBuiltProjects = [
    {
      name: "Reverse Osmosis (RO) Plant Upgrade",
      description: "Modification of existing Detailed Engineering Model to reflect the As-Built condition after the RO Plant upgrade, including red-line markups and final spool documentation."
    },
    {
      name: "Process Piping Rerouting Project",
      description: "Updating the 3D model to capture the As-Built configuration of the newly routed process piping and support structures as installed on-site."
    }
  ];

  const preBidProjects = [
    {
      name: "EPC Bid Support for Oil & Gas Sector",
      description: "Pre-Bid 3D model for Material Take-Off (MTO) and Preliminary Layout optimization to support the commercial proposal for an EPC Bid."
    },
    {
      name: "Skid-Mounted Water Treatment Unit",
      description: "Creation of a Fast-Track 3D Model and basic Equipment List to generate an estimated Bill of Material (BOM) for the bid submission."
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

        <Tabs defaultValue="feed" className="space-y-8">
          <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="feed">FEED Engineering</TabsTrigger>
            <TabsTrigger value="detail">Detail Engineering</TabsTrigger>
            <TabsTrigger value="asbuilt">As-Built Engineering</TabsTrigger>
            <TabsTrigger value="prebid">Pre-Bid Engineering</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Oil Plant Image Card */}
              <Card className="hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative border-primary/10">
                <CardContent className="p-0 relative">
                  <img 
                    src={oilPlantImage} 
                    alt="Oil Plant" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/10 flex flex-col justify-end p-6">
                    <h3 
                      className="text-2xl font-bold text-white mb-2 inline-block w-fit"
                      style={{
                        textShadow: '0 0 20px hsl(var(--glow-blue)), 0 0 40px hsl(var(--glow-blue) / 0.5), 0 0 60px hsl(var(--primary) / 0.3)'
                      }}
                    >
                      Oil Plant
                    </h3>
                    <p className="text-white/90 text-sm">
                      Detailed engineering and EPC support for a 600 MTPD Sulphuric Acid Plant, covering high-temperature and low-pressure piping, static equipment design, GA drawings, datasheets, P&IDs, plot plans, MTOs, vendor document review.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {feedProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg hover:border-primary/30 transition-all duration-300 border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="detail" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {detailProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg hover:border-primary/30 transition-all duration-300 border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="asbuilt" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {asBuiltProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg hover:border-primary/30 transition-all duration-300 border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="prebid" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {preBidProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg hover:border-primary/30 transition-all duration-300 border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Projects;
