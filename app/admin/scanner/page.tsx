// BROKEN - REMOVE THIS:
    
    // OR if it should be state/data:
    const [agents, setAgents] = useState([]);
```

**Steps to Debug:**
1. Open `app/admin/scanner/page.js`
2. Search for all references to `agents`
3. Verify the variable is either:
   - Imported from a module
```

---

## 🔧 COMPLETE REPLACEMENT CODE

Replace the **entire contents** of `app/admin/scanner/page.tsx` with this working code:
```tsx
'use client';

import { useState, useEffect } from 'react';

export default function ScannerPage() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch agents data
    const fetchAgents = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await fetch('/api/agents');
        
        if (!response.ok) {
          throw new Error('Failed to fetch agents');
        }
        
        const data = await response.json();
        setAgents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading scanner...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Scanner</h1>
      
      <div className="grid gap-4">
        {agents.length === 0 ? (
          <p className="text-gray-500">No agents found</p>
        ) : (
          agents.map((agent, index) => (
            <div key={index} className="p-4 border rounded-lg shadow">
              <pre className="text-sm overflow-auto">
                {JSON.stringify(agent, null, 2)}
              </pre>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
```

---

## 📋 STEP-BY-STEP FIX INSTRUCTIONS

### Option 1: GitHub Web Interface (Fastest - 2 minutes)

1. **Click this link:** [Edit page.tsx on GitHub](https://github.com/tedBroker33/CurisPro-Core/edit/main/app/admin/scanner/page.tsx)

2. **Delete ALL existing content** (Ctrl+A, Delete)

3. **Copy and paste** the complete replacement code above

4. **Scroll to bottom** → Add commit message:
```
   fix: resolve syntax error in admin scanner page
```

5. **Click** "Commit changes" button

6. **Wait 2-3 minutes** for Vercel auto-deployment

---

### Option 2: Local Git (3 minutes)
```bash
# 1. Navigate to your project
cd /path/to/CurisPro-Core

# 2. Pull latest
git pull origin main

# 3. Open the file
code app/admin/scanner/page.tsx
# OR
nano app/admin/scanner/page.tsx

# 4. Delete all content (Ctrl+A, Delete)

# 5. Paste the complete replacement code above

# 6. Save and commit
git add app/admin/scanner/page.tsx
git commit -m "fix: resolve syntax error in admin scanner page"
git push origin main
```

---

## 🔍 VERIFICATION CHECKLIST

After pushing the fix, verify in Vercel deployment logs:

| Check | Expected Result |
|-------|----------------|
| ✅ Build starts | "Running build in Washington, D.C." |
| ✅ Dependencies install | "up to date in ~600ms" |
| ✅ Compilation succeeds | "✓ Compiled successfully" |
| ✅ No syntax errors | No red error messages |
| ✅ Build completes | "Deployment Ready" |
| ✅ Site accessible | https://staging.curispro.com loads |

---

## ⚠️ IF YOU NEED CUSTOM LOGIC

If the scanner page needs specific functionality, update these sections:

### 1. **API Endpoint** (Line 17)
```tsx
// Current:
const response = await fetch('/api/agents');

// Change to your actual endpoint:
const response = await fetch('/api/admin/scanner/agents');
```

### 2. **Data Display** (Lines 52-60)
```tsx
// Current: Generic JSON display
{agents.map((agent, index) => (
  <div key={index} className="p-4 border rounded-lg shadow">
    <pre>{JSON.stringify(agent, null, 2)}</pre>
  </div>
))}

// Replace with your custom UI
```

### 3. **Add Authentication Check**
```tsx
// Add at the top of the component:
useEffect(() => {
  // Check if user is admin
  const checkAuth = async () => {
    const session = await getSession();
    if (!session?.user?.isAdmin) {
      router.push('/login');
    }
  };
  checkAuth();
}, []);
```

---

## 🚨 CRITICAL ERROR EXPLANATION

**What Happened:**
- Someone copied my documentation/instructions from a previous response
- Pasted it directly into the `page.tsx` file instead of writing actual code
- Markdown text (```, bullet points, etc.) is not valid TypeScript syntax
- Build failed with syntax error

**The Error:**
