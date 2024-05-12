// hooks/useTabManagement.js
"use client"
import { useState, useEffect } from 'react';

export function useTabManagement(initialTab = 0) {
    const [activeTab, setActiveTab] = useState(initialTab);

    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };

    useEffect(() => {
        // Contoh efek yang bergantung pada activeTab
        console.log('Active tab changed:', activeTab);
    }, [activeTab]);

    return {
        activeTab,
        handleTabChange,
    };
}
