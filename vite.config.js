import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

const packageName=id=>{
 const marker='/node_modules/';
 const packagePath=id.slice(id.lastIndexOf(marker)+marker.length);
 const parts=packagePath.split('/');
 return packagePath.startsWith('@')?parts.slice(0,2).join('/'):parts[0];
};

export default defineConfig({
 plugins:[react()],
 build:{
  rollupOptions:{
   output:{
    manualChunks(id){
     if(!id.includes('/node_modules/'))return;
     const name=packageName(id);
     if(['react','react-dom','scheduler'].includes(name))return 'react-vendor';
     if(name==='recharts'||name.startsWith('d3-'))return 'charts-vendor';
     if(name.startsWith('@supabase/'))return 'supabase-vendor';
     if(name==='lucide-react')return 'icons-vendor';
    }
   }
  }
 }
});
