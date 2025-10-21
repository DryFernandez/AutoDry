interface AuthButtonProps {
  type: 'login' | 'register';
}

export default function AuthButton({ type }: AuthButtonProps) {
  const buttonText = type === 'login' ? 'Log In' : 'Sign Up';
  
  return (
    <div 
      aria-label={`User ${buttonText} Button`} 
      tabIndex={0} 
      role="button" 
      className="w-[100px] h-[40px] rounded-[12px] cursor-pointer transition-all duration-300 bg-gradient-to-br from-red-600 to-transparent bg-red-600/20 hover:bg-red-600/70 hover:shadow-[0_0_8px_rgba(220,38,38,0.5)] flex items-center justify-center focus:outline-none focus:bg-red-600/70 focus:shadow-[0_0_8px_rgba(220,38,38,0.5)]"
    >
      <div className="w-[96px] h-[36px] rounded-[10px] bg-[#1a1a1a] flex items-center justify-center gap-[10px] text-white font-semibold text-sm">
        <svg 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24"
          className="w-[20px] h-[20px] fill-white"
        >
          <g data-name="Layer 2" id="Layer_2">
            <path d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z" />
          </g>
        </svg>
        <p className="text-xs">{buttonText}</p>
      </div>
    </div>
  );
}
