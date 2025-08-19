import React from "react"; 
import { Card, CardContent } from "src/components/ui/card"; 

const aiServices = [ 
  { 
    emoji: "⚙️", 
    title: "Custom AI Model Development", 
    description: "We design and build bespoke AI models tailored to your unique business problems, from predictive analytics to advanced pattern recognition.", 
  }, 
  
  { 
    emoji: "📊", 
    title: "Predictive Analytics & Forecasting", 
    description: "Use historical data to predict future trends. Perfect for demand forecasting, risk assessment, and planning.", 
  }, 
  
  { 
    emoji: "🗣️", 
    title: "Natural Language Processing (NLP)", 
    description: "Boost support, analyze feedback, and automate content with smart language models.", 
  }, 
  
  { 
    emoji: "👁️", 
    title: "Computer Vision Applications", 
    description: "Detect patterns, automate inspection, and enable visual insights with AI that sees like humans.", 
  }, 
  
  { 
    emoji: "📈", 
    title: "AI Strategy Consulting", 
    description: "Let’s map out your AI path. We'll guide you from vision to execution with clear ROI.", 
  }, 
  
  { 
    emoji: "🎓", 
    title: "Machine Learning Training Programs", 
    description: "Train your team with hands-on sessions that demystify ML and empower smart decisions.", 
  
  }, 

]; 


export function AIMLServicesList() 

{ 
  
  return ( 
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"> 
      {aiServices.map((item, i) => 
      ( <Card key={i} 
        
        className="bg-white/80 dark:bg-zinc-900/80 border border-gray-200 
                    dark:border-zinc-700 rounded-xl shadow-md hover:shadow-xl 
                    transition-all duration-300 backdrop-blur-md" > 
                                
          <CardContent className="p-6"> 
            <div className="flex items-center gap-3 mb-4"> 
              <span className="text-3xl">
                {item.emoji}
              </span>

            <h3 className="font-bold text-gray-900 dark:text-white text-lg md:text-xl"> 
              {item.title} 
            </h3> 
            
            </div> 
              <p className="text-gray-700 dark:text-zinc-300 text-sm leading-relaxed"> 
                {item.description} 
              </p> 
              
          </CardContent> 
              
        </Card> ))} 
              
  </div> 
            

          ); 
    
}