import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';
import type { Technology } from './types/tech';

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch JSON data on Component Mount using useEffect
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading data:', err);
        setLoading(false);
      });
  }, []);

  // Add to Stack function
  const handleAddToStack = (tech: Technology) => {
    const isAlreadyInStack = stack.some((item) => item.id === tech.id);

    if (isAlreadyInStack) {
      toast.warning(`${tech.name} is already in your stack!`, { position: 'top-right' });
      return;
    }

    setStack([...stack, tech]);
    toast.success(`Added ${tech.name} to your stack!`, { position: 'top-right' });
  };

  // Remove single item from Stack
  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    const updatedStack = stack.filter((item) => item.id !== id);
    setStack(updatedStack);

    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from stack`, { position: 'top-right' });
    }
  };

  // Remove All items
  const handleRemoveAll = () => {
    setStack([]);
    toast.error('Cleared all technologies from stack', { position: 'top-right' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
    
      <ToastContainer />

    
      <Navbar />

     
      <Hero />

   
      <main id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Explore the{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <span className="loading loading-spinner loading-lg text-pink-600"></span>
            <p className="ml-3 text-gray-500 font-medium">Loading technologies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
        
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  onAddToStack={handleAddToStack}
                  isAdded={stack.some((item) => item.id === tech.id)}
                />
              ))}
            </div>

            
            <div className="lg:col-span-1">
              <StackSidebar
                stack={stack}
                onRemoveFromStack={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>

          </div>
        )}
      </main>

     
      <Footer />
    </div>
  );
}