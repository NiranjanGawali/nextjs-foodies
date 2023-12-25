import Link from 'next/link';
import classes from './page.module.css';
import { getMeals } from '@/lib/meals';
import MealsGrid from '@/components/meals/meals-grid';
import { Suspense } from 'react';

export async function generateMetadata({ params }) {
  return {
    title: 'All Meals',
    description: 'All meals',
  };
}

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span>by you</span>
        </h1>
        <p>
          Choose your favorite recipee and cook yourself, its easy and fun!!
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share your favorite recipee</Link>
        </p>
      </header>
      <main>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals....</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
