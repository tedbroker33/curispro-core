// Check if this exists at the top of the file:
import { agents } from '@/lib/agents'; // or wherever agents is defined

// OR if it's a prop:
export default function ScannerPage({ agents }) {
  // ...
}

// OR if it should be state/data:
const [agents, setAgents] = useState([]);
```

**Steps to Debug:**
1. Open `app/admin/scanner/page.js`
2. Search for all references to `agents`
3. Verify the variable is either:
   - Imported from a module
   - Defined as a prop
   - Initialized as state
   - Retrieved from an API call
4. Add the missing import/definition
5. Test build locally: `npm run build`

---

### ⚠️ WARNING - Secondary Issues

#### Warning #1: Missing SWC Dependencies
```
⚠ Found lockfile missing swc dependencies, run next locally to automatically patch
