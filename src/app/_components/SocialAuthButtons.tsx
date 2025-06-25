import OAuthButton from './OAuthButton';

export default function SocialAuthButtons() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <OAuthButton provider="google" />
      <OAuthButton provider="github" />
    </div>
  );
}
