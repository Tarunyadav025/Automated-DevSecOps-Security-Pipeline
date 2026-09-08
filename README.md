# Automated DevSecOps Security Pipeline

An automated DevSecOps security pipeline for continuous vulnerability detection and secure deployment of web applications.

## Project Overview

This project demonstrates how security controls can be integrated into the software development lifecycle using automated CI/CD security checks.

The pipeline evaluates application source code, dependencies, secrets, containers, and runtime behavior before allowing a secure deployment.

## Security Pipeline

```text
Developer
    ↓
GitHub Repository
    ↓
GitHub Actions
    ↓
┌───────────────────────────────────────┐
│          Security Checks               │
│                                       │
│  CodeQL          → SAST               │
│  Semgrep         → Custom SAST        │
│  Gitleaks        → Secret Detection   │
│  Dependency      → Dependency Review  │
│  Trivy           → Filesystem Scan    │
│  Trivy           → Container Scan     │
│  OWASP ZAP       → DAST               │
│  OSSF Scorecard  → Supply Chain       │
└───────────────────────────────────────┘
    ↓
Security Gate
    ↓
Secure Deployment
