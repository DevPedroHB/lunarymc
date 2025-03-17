import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import type React from "react";

export const ErrorMessage: React.FC<{ error: string }> = ({ error }) => (
	<Alert variant="destructive">
		<AlertCircle className="w-4 h-4" />
		<AlertTitle>{error}</AlertTitle>
	</Alert>
);
