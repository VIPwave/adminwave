import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed w-full h-full overflow-hidden inset-0 flex items-center justify-center bg-black bg-opacity-50 z-1000">
      <div className="bg-chart text-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <button onClick={onClose} className="absolute top-5 right-5 text-white">
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}
