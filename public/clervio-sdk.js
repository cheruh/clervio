/**
 * Clervio SDK - Behavioral Intelligence Platform
 * This is a simplified demonstration of how the SDK would work
 * In a real implementation, this would be a more complex library
 */

(function(window, document) {
  'use strict';
  
  // Initialize the SDK
  function init(apiKey) {
    if (!apiKey) {
      console.error('Clervio SDK: API key is required');
      return;
    }
    
    console.log('Clervio SDK initialized with API key:', apiKey);
    
    // Start tracking user behavior
    trackBehavior();
  }
  
  // Track user behavior
  function trackBehavior() {
    // Mouse movement tracking
    document.addEventListener('mousemove', function(e) {
      // In a real implementation, we would batch these events and send them periodically
      // console.log('Mouse moved:', e.clientX, e.clientY);
    });
    
    // Click tracking
    document.addEventListener('click', function(e) {
      const target = e.target;
      const data = {
        x: e.clientX,
        y: e.clientY,
        element: target.tagName,
        id: target.id,
        class: target.className,
        timestamp: new Date().toISOString()
      };
      
      console.log('Clervio SDK: Click tracked', data);
    });
    
    // Scroll tracking
    let lastScrollTime = Date.now();
    let scrollTimeout;
    
    window.addEventListener('scroll', function() {
      const now = Date.now();
      const scrollData = {
        scrollY: window.scrollY,
        scrollX: window.scrollX,
        timestamp: new Date().toISOString()
      };
      
      // Clear previous timeout
      clearTimeout(scrollTimeout);
      
      // Set a new timeout to detect when scrolling stops
      scrollTimeout = setTimeout(function() {
        console.log('Clervio SDK: Scroll ended', scrollData);
      }, 150);
      
      lastScrollTime = now;
    });
    
    // Page visibility tracking
    document.addEventListener('visibilitychange', function() {
      const visibilityData = {
        visible: !document.hidden,
        timestamp: new Date().toISOString()
      };
      
      console.log('Clervio SDK: Visibility changed', visibilityData);
    });
  }
  
  // Public API
  window.Clervio = {
    init: init
  };
  
})(window, document);