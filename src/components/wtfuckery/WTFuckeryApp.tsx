import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Sparkles, Skull, Ghost, Brain, Coffee } from 'lucide-react';

const WTFuckeryApp = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);

  const peers = [
    { id: 1, name: "chaos_goblin_42", mood: "✨ living my worst life ✨" },
    { id: 2, name: "emotional_damage", mood: "main character energy" },
    { id: 3, name: "therapy_is_expensive", mood: "surviving not thriving" }
  ];

  const resources = [
    { title: "Why Your Brain is Being Extra™", type: "mood guide", icon: Brain },
    { title: "How to Not Lose Your Sh*t", type: "survival tips", icon: Coffee },
    { title: "Talk to Someone Who Gets It", type: "actual help", icon: Ghost }
  ];

  const handleStartChat = (peerId) => {
    setActiveChat(peerId);
    setMessages([
      { sender: 'system', text: 'reminder: keep it real but keep it respectful 💅' },
      { sender: 'peer', text: 'hey bestie, rough day? same tbh 😮‍💨' }
    ]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-black text-white">
      <Card className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 border-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Skull className="w-8 h-8" />
            WTFuckery
            <span className="text-sm font-normal ml-2 opacity-75">
              Because life is just pure, unfiltered bullsh*t
            </span>
          </CardTitle>
        </CardHeader>
      </Card>

      <Tabs defaultValue="chat" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4 bg-gray-900">
          <TabsTrigger value="chat" className="flex items-center gap-2 data-[state=active]:bg-purple-600">
            <MessageCircle className="w-4 h-4" />
            Vent
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2 data-[state=active]:bg-purple-600">
            <Sparkles className="w-4 h-4" />
            Get Help
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex items-center gap-2 data-[state=active]:bg-purple-600">
            <Ghost className="w-4 h-4" />
            Your Vibe
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chat">
          <Card className="bg-gray-900 border-purple-500">
            <CardContent className="p-4">
              {!activeChat ? (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-purple-300">Find Your Emotional Support Bestie</h3>
                  {peers.map((peer) => (
                    <Card key={peer.id} 
                          className="p-4 cursor-pointer bg-gray-800 hover:bg-gray-700 border-purple-400 transition-all" 
                          onClick={() => handleStartChat(peer.id)}>
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium text-purple-300">@{peer.name}</h4>
                          <p className="text-sm text-gray-400">{peer.mood}</p>
                        </div>
                        <MessageCircle className="w-5 h-5 text-purple-400" />
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="border border-purple-500 rounded-lg p-4 h-96 overflow-y-auto bg-gray-800">
                    {messages.map((msg, idx) => (
                      <div key={idx} className={`mb-2 ${msg.sender === 'peer' ? 'text-left' : 'text-right'}`}>
                        <span className={`inline-block rounded-lg px-4 py-2 ${
                          msg.sender === 'peer' ? 'bg-purple-600' : 'bg-pink-600'
                        }`}>
                          {msg.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="spill the tea..."
                      className="flex-1 p-2 rounded-lg bg-gray-800 border-purple-500 border text-white"
                    />
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                      Send
                    </button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card className="bg-gray-900 border-purple-500">
            <CardContent className="p-4">
              <div className="space-y-4">
                {resources.map((resource, idx) => (
                  <Card key={idx} className="p-4 bg-gray-800 border-purple-400 hover:bg-gray-700 transition-all cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-purple-300">{resource.title}</h4>
                        <p className="text-sm text-gray-400">{resource.type}</p>
                      </div>
                      <resource.icon className="w-5 h-5 text-purple-400" />
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile">
          <Card className="bg-gray-900 border-purple-500">
            <CardContent className="p-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-purple-300">Your Corner of Chaos</h3>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-purple-300">Anonymous ID: @chaotic_good_vibes</p>
                  <p className="text-gray-400">Joined: when it all went downhill</p>
                  <p className="text-gray-400">Current Mood: existing with spite</p>
                </div>
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg w-full transition-colors">
                  Update Your Vibe
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WTFuckeryApp;