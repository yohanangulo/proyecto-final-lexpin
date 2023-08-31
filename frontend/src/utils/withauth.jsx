import { getSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent) => {
  return function AuthenticatedComponent({ ...props }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const checkAuth = async () => {
      const session = await getSession();

      if (!session) {
        router.push('/sign-in');
      } else if (session.user.email !== 'admin@coolstore.com') {
        router.push('/');
      } else {
        setLoading(false);
      }
    };

    useEffect(() => {
      checkAuth();
    }, []); 

    if (loading) {
     
      return <div>
      RESTRICTED ACCESS</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
