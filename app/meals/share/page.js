import classes from './page.module.css';
import MealForm from '@/components/meals/meal-form';

export async function generateMetadata({ params }) {
  return {
    title: 'Create your own meal',
    description: 'You can create your own mail here for sharing purpose',
  };
}
export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <MealForm />
    </>
  );
}
