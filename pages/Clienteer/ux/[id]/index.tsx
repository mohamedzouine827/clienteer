import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>Index {id}</div>
  );
};

export default Index;
