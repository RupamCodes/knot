export enum Severity {
  CRITICAL = 'CRITICAL',
  MODERATE = 'MODERATE',
  LOW = 'LOW'
}

export enum IssueType {
  CONTRADICTION = 'CONTRADICTION',
  AMBIGUITY = 'AMBIGUITY',
  RISK = 'RISK',
  CHANGE = 'CHANGE',
  MISSING = 'MISSING'
}

export interface AnalysisIssue {
  id: string;
  severity: Severity;
  type: IssueType;
  title: string;
  description: string;
  sourceDoc1?: string; // Quote from Doc A
  sourceDoc2?: string; // Quote from Doc B (if applicable)
  pageRef?: string;
  recommendation?: string;
}

export interface RiskAssessment {
  score: number; // 0-100
  level: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';
  financialImpact: string; // Brief description of potential cost
  legalDomain: string; // e.g., "Intellectual Property", "Liability"
  primaryBeneficiary: string; // Who does the contract favor?
  explanation: string; // Why this score?
}

export interface AnalysisResponse {
  summary: string;
  riskAssessment: RiskAssessment;
  issues: AnalysisIssue[];
}

export interface UploadedFile {
  file: File;
  preview?: string;
  base64?: string;
}

export type AnalysisMode = 'ANALYSIS' | 'COMPARISON';
