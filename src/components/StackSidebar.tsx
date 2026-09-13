import type { Technology } from '../types/tech';

interface StackSidebarProps {
  stack: Technology[];
  onRemoveFromStack: (id: string) => void;
  onRemoveAll: () => void;
}

export default function StackSidebar({ stack, onRemoveFromStack, onRemoveAll }: StackSidebarProps) {
  const isStackEmpty = stack.length === 0;

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm sticky top-20">
     
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Your Stack</h2>
        <p className="text-xs text-gray-400 mt-1">
          {isStackEmpty
            ? 'No technologies selected yet.'
            : `${stack.length} Technology Selected`}
        </p>
      </div>

   
      {isStackEmpty ? (
        <div className="border-2 border-dashed border-gray-100 rounded-2xl p-8 text-center my-6">
          <p className="text-gray-400 text-sm font-medium">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3 mb-6 max-h-[380px] overflow-y-auto pr-1">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 border border-gray-100 rounded-2xl bg-white hover:border-gray-200 transition"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-none">{item.name}</h4>
                  <span className="text-[10px] text-gray-400 font-medium">{item.category}</span>
                </div>
              </div>

              <button
                onClick={() => onRemoveFromStack(item.id)}
                className="text-gray-400 hover:text-rose-500 p-1 transition"
                title="Remove item"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

   
      {!isStackEmpty && (
        <button
          onClick={onRemoveAll}
          className="w-full py-2.5 rounded-xl border border-rose-200 text-rose-500 font-semibold text-sm hover:bg-rose-50 transition"
        >
          Remove All
        </button>
      )}

    </div>
  );
}