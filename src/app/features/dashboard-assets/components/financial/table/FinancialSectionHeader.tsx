"use client";

import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import styles from './FinancialTable.module.css';

interface FinancialSectionHeaderProps {
  label: string;
  isExpanded: boolean;
  total: number;
  onToggle: () => void;
}

export const FinancialSectionHeader: React.FC<FinancialSectionHeaderProps> = ({
  label,
  isExpanded,
  total,
  onToggle
}) => (
  <div className={styles.sectionHeader}>
    <button 
      onClick={onToggle}
      className={styles.sectionToggle}
    >
      {isExpanded ? <ChevronDown /> : <ChevronRight />}
      <span>{label}</span>
    </button>
    <span className={styles.sectionTotal}>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      }).format(total)}
    </span>
  </div>
); 