import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { User, Sprout, Building2, Shield } from "lucide-react";

interface SetupScreenProps {
  onNext: (role: string) => void;
}

export function SetupScreen({ onNext }: SetupScreenProps) {
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });

  const roles = [
    {
      id: "consumer",
      name: "Consumer",
      icon: User,
      description: "Scan & trace Ayurvedic products",
      color: "bg-green-100 text-green-700 border-green-200",
    },
    {
      id: "farmer",
      name: "Farmer/Cultivator",
      icon: Sprout,
      description: "Register herbs & cultivation data",
      color:
        "bg-emerald-100 text-emerald-700 border-emerald-200",
    },
    {
      id: "manufacturer",
      name: "Manufacturer",
      icon: Building2,
      description: "Process & package products",
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      id: "auditor",
      name: "Auditor/Regulator",
      icon: Shield,
      description: "Verify compliance & quality",
      color: "bg-purple-100 text-purple-700 border-purple-200",
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = () => {
    if (selectedRole && formData.name && formData.email) {
      onNext(selectedRole);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex flex-col">
      {/* Header */}
      <div className="text-center pt-12 pb-6">
        <div className="mb-4">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Sprout className="w-8 h-8 text-white" />
          </div>
        </div>

        <h1 className="text-2xl text-green-800 mb-1">
          TrueHerb
        </h1>
        <p className="text-sm text-green-600 mt-2">
          Transparency from Farm to You
        </p>
      </div>

      {/* Role Selection */}
      <div className="px-6 mb-6">
        <Label className="text-sm text-green-700 uppercase tracking-wide mb-3 block">
          Select Your Role
        </Label>
        <div className="grid grid-cols-2 gap-3">
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <Card
                key={role.id}
                className={`cursor-pointer transition-all border-2 ${
                  selectedRole === role.id
                    ? "ring-2 ring-green-500 border-green-500"
                    : "border-gray-200 hover:border-green-300"
                }`}
                onClick={() => setSelectedRole(role.id)}
              >
                <CardContent className="p-4 text-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${role.color}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    {role.name}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {role.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 px-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-sm text-green-700 uppercase tracking-wide"
            >
              Full Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                handleInputChange("name", e.target.value)
              }
              className="bg-white/70 border-green-200 rounded-lg h-12"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm text-green-700 uppercase tracking-wide"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                handleInputChange("email", e.target.value)
              }
              className="bg-white/70 border-green-200 rounded-lg h-12"
              placeholder="Enter your email"
            />
          </div>

          {(selectedRole === "farmer" ||
            selectedRole === "manufacturer" ||
            selectedRole === "auditor") && (
            <div className="space-y-2">
              <Label
                htmlFor="organization"
                className="text-sm text-green-700 uppercase tracking-wide"
              >
                {selectedRole === "farmer"
                  ? "Farm Name"
                  : selectedRole === "manufacturer"
                    ? "Company Name"
                    : "Organization"}
              </Label>
              <Input
                id="organization"
                value={formData.organization}
                onChange={(e) =>
                  handleInputChange(
                    "organization",
                    e.target.value,
                  )
                }
                className="bg-white/70 border-green-200 rounded-lg h-12"
                placeholder={`Enter your ${selectedRole === "farmer" ? "farm" : "organization"} name`}
              />
            </div>
          )}
        </div>

        {/* Register Button */}
        <div className="mt-8 mb-6">
          <Button
            onClick={handleRegister}
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg h-12"
            disabled={
              !selectedRole || !formData.name || !formData.email
            }
          >
            Join Ayurvedic Network
          </Button>
        </div>
      </div>
    </div>
  );
}