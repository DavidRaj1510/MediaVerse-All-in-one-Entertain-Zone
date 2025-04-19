
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const EditProfile = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      const file = event.target.files?.[0];
      if (!file) return;

      const user = (await supabase.auth.getUser()).data.user;
      if (!user) return;

      const fileExt = file.name.split('.').pop();
      const filePath = `${user.id}/${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('profile_pictures')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('profile_pictures')
        .getPublicUrl(filePath);

      setAvatarUrl(publicUrl);
      await updateProfile({ avatar_url: publicUrl });
      toast.success('Profile picture updated successfully');
    } catch (error) {
      toast.error('Error uploading avatar');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: { username?: string; bio?: string; avatar_url?: string }) => {
    try {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) throw new Error('No user logged in');

      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id);

      if (error) throw error;
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error('Error updating profile');
    }
  };

  return (
    <Card className="bg-black/40 border-white/10">
  <CardHeader>
    <CardTitle className="text-3xl font-bold">Edit Profile</CardTitle>
  </CardHeader>
  <CardContent className="space-y-6 text-lg">
    <div className="flex flex-col items-center gap-4">
      <Avatar className="h-28 w-28">
        <AvatarImage src={avatarUrl || ''} />
        <AvatarFallback className="text-xl">Profile</AvatarFallback>
      </Avatar>
      <div>
        <Input
          type="file"
          accept="image/*"
          onChange={handleAvatarUpload}
          disabled={loading}
          className="hidden"
          id="avatar-upload"
        />
        <Button
          variant="outline"
          className="w-full text-base"
          disabled={loading}
          onClick={() => document.getElementById('avatar-upload')?.click()}
        >
          {loading ? 'Uploading...' : 'Change Profile Picture'}
        </Button>
      </div>
    </div>

    <div className="space-y-4">
      <div>
        <label className="text-lg font-semibold">Username</label>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 text-base"
          placeholder="Enter username"
        />
      </div>

      <div>
        <label className="text-lg font-semibold">Bio</label>
        <Textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="mt-3 text-base"
          placeholder="Tell us about yourself"
          rows={4}
        />
      </div>

      <Button 
        onClick={() => updateProfile({ username, bio })}
        className="w-full bg-[#e50914] hover:bg-[#f40612] text-lg font-semibold py-6"
      >
        Save Changes
      </Button>
    </div>
  </CardContent>
</Card>

  );
};

export default EditProfile;
