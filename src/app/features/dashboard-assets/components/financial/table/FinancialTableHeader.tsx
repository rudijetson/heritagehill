"use client";

import React from 'react';
import styles from './FinancialTable.module.css';

interface FinancialTableHeaderProps {
  title: string;
  subtitle: string;
}

export const FinancialTableHeader: React.FC<FinancialTableHeaderProps> = ({ title, subtitle }) => (
  <div className={styles.header}>
    <div className={styles.titleGroup}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  </div>
); 