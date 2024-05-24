import styles from '@/app/ui/TriggerButton.module.css';

export default function TriggerButton({ name }) {
  return <div className={styles.TriggerButton}>{name}</div>;
}
