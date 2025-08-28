// This function gets the event codes for a specific interface.
// Your form builder can use this to know which options to display.
async function getEventCodesForInterface(interfaceId) {
  try {
    // Fetch the data from our new, dedicated JSON file
    const response = await fetch('formBuilderData.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Look up the interface by its ID and return its events
    if (data[interfaceId] && data[interfaceId].events) {
      console.log(`Found events for ${interfaceId}:`, data[interfaceId].events);
      return data[interfaceId].events;
    } else {
      console.log(`No events found for ${interfaceId}`);
      return []; // Return an empty array if not found
    }
  } catch (error) {
    console.error("Could not fetch or process the form builder data:", error);
    return [];
  }
}

// --- Example Usage ---
// This will run when the script is loaded, demonstrating that it works.
getEventCodesForInterface('IF-001');
