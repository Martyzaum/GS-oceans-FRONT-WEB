"use client";
import styles from '../../styles/page.module.scss'
import Dashboard from '@/components/dashboard';

export default function Home() {
  return (
    <main className={styles.mainContainer}>
    <Dashboard />
    </main>
  );
}
