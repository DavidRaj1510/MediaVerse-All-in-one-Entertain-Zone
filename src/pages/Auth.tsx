import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';

const Auth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Check session and handle redirect
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/profile');
      }
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate('/profile');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success('Logged in successfully!');
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        toast.success('Account created! Check your email to confirm.');
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/MediaVerse-All-in-one-Entertain-Zone/`
        }
      });
      if (error) throw error;
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-3xl font-bold text-[#e50914]">MediaVerse</Link>
        </div>

        <div className="flex justify-center items-center min-h-[80vh]">
          <div className="auth-form">
            <h1 className="auth-title">{isLogin ? 'Sign In' : 'Sign Up'}</h1>

            <form onSubmit={handleAuth} className="space-y-4">
              <input
                type="email"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="auth-input"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="auth-input"
              />

              <button
                type="submit"
                className="auth-button"
                disabled={loading}
              >
                {loading ? 'Processing...' : isLogin ? 'Sign In' : 'Sign Up'}
              </button>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="mr-2 h-4 w-4"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-400">Remember me</label>
                </div>
                <a href="#" className="text-sm text-gray-400 hover:underline">Need help?</a>
              </div>
            </form>

            <div className="my-6">
              <button
                onClick={handleGoogleSignIn}
                className="w-full bg-transparent border border-gray-600 text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center"
                disabled={loading}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M5.26620003,9.76452941...Z" />
                  <path fill="#34A853" d="M16.0407269,18.0125889...Z" />
                  <path fill="#4A90E2" d="M19.834192,20.9995801...Z" />
                  <path fill="#FBBC05" d="M5.27698177,14.2678769...Z" />
                </svg>
                Sign in with Google
              </button>
            </div>

            <p className="text-gray-400">
              {isLogin ? "New to MediaVerse? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-white hover:underline"
                disabled={loading}
              >
                {isLogin ? 'Sign up now' : 'Sign in'}
              </button>
            </p>

            <p className="text-xs text-gray-500 mt-4">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
              <a href="#" className="text-blue-500 hover:underline ml-1">Learn more.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
