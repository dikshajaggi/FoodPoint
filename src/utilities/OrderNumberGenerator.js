export function generateOrderNumber() {
    const timestamp = Date.now().toString(); // Get the current timestamp
    const randomNum = Math.floor(Math.random() * 1000000).toString(); // Generate a random number
    return `ORD-${timestamp}-${randomNum}`;
}