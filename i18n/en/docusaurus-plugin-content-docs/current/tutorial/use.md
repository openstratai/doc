---
sidebar_position: 2
---

# Using Tasks

Once your task is successfully created, the system will automatically start tracking the data fluctuations of the selected target.

## Viewing Task Status

### On the Task Page

After successful creation, you can see the active tasks in the task panel at the bottom left of the homepage.

**Status Indicators:**

- 🟢 **Green Dot** - Task is running
- 🟡 **Yellow Dot** - Task is paused

### Example of Task Execution

Take the **Short-Term Technical Bottom Task for AAPL** as an example:

[Task List]

| 🟢 AAPL Short-Term Bottom |
| ------------------------- |
| 🟡 BTC Long-Term Bottom   |
| 🟢 MSFT Short-Term Bottom |

## Notification Methods

When the target stock (e.g., AAPL) exhibits characteristics of a short-term technical bottom, the AI will capture it and notify the user:

### 1. APP Push Notifications 📱

**Prerequisites:**

- Openstrat App is installed
- Push notification permission is enabled

**Delivery:**

- Real-time alerts pushed to your phone
- Notification bar will display the signal

### 2. Info Hall Overview 📢

- View all signals in the Info Hall on the homepage
- Signals are displayed in a consolidated feed

### 3. Task Chat History 💬

If signals are buried by other messages in the Info Hall:

1. **Open the History Page**

   - Click the "History" button at the top right

2. **Find the Related Task**

   - Go to the Task page
   - Locate the AAPL Short-Term Bottom task and enter

3. **View Notification History**
   - See all historical alerts for this task
   - You can continue interacting with the task in chat

## Troubleshooting Push Notifications

### If You’re Not Receiving Notifications

1. **Check Notification Center**

   - Click the top-left menu
   - Enter the Notification Center
   - Check if relevant records exist

2. **Check App Permissions**

   - If the record exists but no push was received
   - The app's push permission may be turned off
   - Re-enable it in your phone settings

3. **iOS-Specific Case**
   - Push notifications on iOS may occasionally fail to arrive
   - This is a known system behavior and not a major issue

## Interpreting Technical Signal Content

Each technical signal notification contains three key pieces of information:

### 📅 Timestamp

- Displayed in the user’s local time zone
- Special markers will be noted separately if applicable
- Accurate to the minute

### 💰 Entry Price

- The stock price at the moment the signal was generated
- Can be used as a reference point for trading
- Reflects real-time market conditions

### 📊 Signal Probability

- The percentage probability of a top/bottom occurring within the given cycle
- By default, only signals with probability > 50% will be sent
- Higher probability = stronger reliability

### Example Notification

> _AAPL Short-Term Bottom Detected_  
> Time: 15:32 (UTC+8)  
> Entry Price: $184.21  
> Signal Probability: 74%

## Daily Absence Notification

If none of your tasks generate any signals during the day, the system will send a **Daily Absence Report** one hour after market close.

**The report includes:**

- Market overview for the day
- Monitoring status of each task
- Key watch points for the next day

---

**Next Step:** [Learn How to Manage Tasks](/docs/tutorial/manage)
