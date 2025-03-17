import { Button } from "@/components/ui/button";
import type React from "react";

export const SubmitButton: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => <Button type="submit">{children}</Button>;
