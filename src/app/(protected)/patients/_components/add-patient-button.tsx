"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import UpsertPatientForm from "./upsert-patient-form";

interface AddPatientButtonProps {
  onSuccess?: () => void;
}

const AddPatientButton = ({ onSuccess }: AddPatientButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSuccess = () => {
    setIsOpen(false);
    onSuccess?.();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar paciente
        </Button>
      </DialogTrigger>
      <UpsertPatientForm onSuccess={handleSuccess} isOpen={isOpen} />
    </Dialog>
  );
};

export default AddPatientButton;
