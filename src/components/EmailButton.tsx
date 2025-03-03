
import React, { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';
import { toast } from 'sonner';

interface EmailButtonProps {
  email: string;
}

const EmailButton: React.FC<EmailButtonProps> = ({ email }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setIsCopied(true);
        toast.success('Email copied to clipboard!');
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(() => {
        toast.error('Failed to copy email');
      });
  };

  return (
    <button
      onClick={handleCopyEmail}
      className="flex items-center space-x-2 py-2 px-4 rounded-lg bg-portfolio-card-bg border border-portfolio-neon-border/30 hover:border-portfolio-accent/70 transition-all duration-300 group neon-glow"
      aria-label="Copy email address"
    >
      <Mail size={18} className="text-portfolio-gray-medium group-hover:text-portfolio-accent transition-colors duration-300" />
      <span className="text-portfolio-gray-dark font-medium">{email}</span>
      {isCopied ? (
        <Check size={18} className="text-portfolio-accent" />
      ) : (
        <Copy size={18} className="text-portfolio-gray-medium group-hover:text-portfolio-accent transition-colors duration-300" />
      )}
    </button>
  );
};

export default EmailButton;
