import { Card } from '@/components/ui/card';

function ReusableCard({ title, buttonLabel, onButtonClick, children }) {
  return (
    <Card className="flex flex-col w-full h-auto p-6 bg-white rounded-2xl">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-medium">{title}</h2>
        {buttonLabel && (
          <button
            className="text-sm font-semibold text-primary"
            onClick={onButtonClick}
          >
            {buttonLabel}
          </button>
        )}
      </div>
      <div className="mt-4 space-y-3">{children}</div>
    </Card>
  );
}

export default ReusableCard;
