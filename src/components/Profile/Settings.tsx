
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Settings = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = async () => {
    try {
      const { error } = await supabase.auth.updateUser({ email: newEmail });
      if (error) throw error;
      toast.success('Email update request sent. Please check your email to confirm the change.');
      setNewEmail('');
    } catch (error) {
      toast.error('Error updating email');
    }
  };

  const handlePasswordChange = async () => {
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;
      toast.success('Password updated successfully');
      setNewPassword('');
    } catch (error) {
      toast.error('Error updating password');
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) return;

      const { error } = await supabase.auth.admin.deleteUser(user.id);
      if (error) throw error;
      
      await supabase.auth.signOut();
      navigate('/');
      toast.success('Account deleted successfully');
    } catch (error) {
      toast.error('Error deleting account');
    }
  };

  return (
    <Card className="bg-black/40 border-white/10">
  <CardHeader>
    <CardTitle className="text-3xl font-bold">Account Settings</CardTitle>
  </CardHeader>
  <CardContent className="space-y-6 text-base">
    <div className="space-y-6">
      <div>
        <Label className="text-lg font-semibold">Change Email</Label>
        <div className="flex gap-2 mt-2">
          <Input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="New email"
            className="text-base"
          />
          <Button 
            onClick={handleEmailChange}
            className="bg-[#e50914] hover:bg-[#f40612] text-base font-medium"
          >
            Update Email
          </Button>
        </div>
      </div>

      <div>
        <Label className="text-lg font-semibold">Change Password</Label>
        <div className="flex gap-2 mt-2">
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New password"
            className="text-base"
          />
          <Button 
            onClick={handlePasswordChange}
            className="bg-[#e50914] hover:bg-[#f40612] text-base font-medium"
          >
            Update Password
          </Button>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-800">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" className="w-full text-base font-medium py-2">
              Delete Account
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl font-bold">Are you sure?</AlertDialogTitle>
              <AlertDialogDescription className="text-base">
                This action cannot be undone. This will permanently delete your
                account and remove all your data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="text-base">Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteAccount} className="text-base font-medium">
                Delete Account
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>

    <div className="space-y-4 pt-6 border-t border-gray-800">
      <a 
        href="mailto:support@mediaverse.com" 
        className="text-base text-gray-400 hover:text-white block"
      >
        Contact Support
      </a>
      <Button 
        onClick={() => {
          supabase.auth.signOut();
          navigate('/');
        }}
        className="w-full bg-[#e50914] hover:bg-[#f40612] text-base font-medium"
      >
        Sign Out
      </Button>
    </div>
  </CardContent>
</Card>

  );
};

export default Settings;
