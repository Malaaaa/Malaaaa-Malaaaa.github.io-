"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[699],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(u,s(s({ref:t},h),{},{components:a})):n.createElement(u,s({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1990:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],o={},l="Exceptional Control Flow",c={unversionedId:"CSAPP/Exceptional Control Flow",id:"CSAPP/Exceptional Control Flow",title:"Exceptional Control Flow",description:"Exceptions are a form of exceptional control flow that are implemented partly",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/CSAPP/Exceptional Control Flow.md",sourceDirName:"CSAPP",slug:"/CSAPP/Exceptional Control Flow",permalink:"/zh-CN/docs/CSAPP/Exceptional Control Flow",editUrl:"https://github.com/Malaaaa/blog-sample/main/docs/CSAPP/Exceptional Control Flow.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Computer Systems",permalink:"/zh-CN/docs/CSAPP/CSAPPNOTE"},next:{title:"Linking",permalink:"/zh-CN/docs/CSAPP/Linking"}},h=[{value:"Interrupt handling.",id:"interrupt-handling",children:[],level:2},{value:"Trap handling.",id:"trap-handling",children:[],level:2},{value:"Fault handling.",id:"fault-handling",children:[],level:2},{value:"Abort handling.",id:"abort-handling",children:[{value:"Linux/x86-64 Exceptions in the system",id:"linuxx86-64-exceptions-in-the-system",children:[],level:3},{value:"Linux/x86-64 failures and terminations",id:"linuxx86-64-failures-and-terminations",children:[],level:3},{value:"Linux/x86-64 System Calls",id:"linuxx86-64-system-calls",children:[],level:3},{value:"Fork",id:"fork",children:[],level:3}],level:2}],p={toc:h};function d(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exceptional-control-flow"},"Exceptional Control Flow"),(0,i.kt)("p",null,"Exceptions are a form of exceptional control flow that are implemented partly\nby the",(0,i.kt)("strong",{parentName:"p"},"hardware")," and",(0,i.kt)("strong",{parentName:"p"},"partly by the operating system."),"\n\\\nAn exception is an abrupt change in the control flow in response to some\nchange in the processor\u2019s state."),(0,i.kt)("p",null,"Asynchronous exceptions are generated by events in I/O devices external to the processor. Synchronous exceptions are the direct product of the execution of an instruction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Anatomy of an exception",src:a(2948).Z,width:"924",height:"492"}),"\nWhen the operating system starts, a jump table called the exception table is allocated and initialized."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_12.png",src:a(2668).Z,width:"964",height:"796"})),(0,i.kt)("h2",{id:"interrupt-handling"},"Interrupt handling."),(0,i.kt)("p",null,"I/O I/O devices, such as network adapters, disk controllers, and timer chips, trigger an interrupt by signaling a pin on the processor chip and placing an exception number on the system bus that identifies the device causing the interrupt."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_13.png",src:a(9132).Z,width:"964",height:"406"}),"\nAfter the current instruction completes execution, the processor notices that the voltage at the interrupt pin has gone high, reads the exception number from the system bus, and then calls the appropriate interrupt handler. When the handler returns, it returns control to the next instruction (i.e., the one that would have followed the current instruction in the control flow if the interrupt had not occurred). The result is that the program continues to execute as if the interrupt had not occurred."),(0,i.kt)("p",null,"The remaining exception types (trap, fault, and termination) occur synchronously and are the result of executing the current instruction. We call this type of instruction a faulting instruction."),(0,i.kt)("h2",{id:"trap-handling"},"Trap handling."),(0,i.kt)("p",null,'Traps are intentional exceptions that are the result of executing an instruction. Just like interrupt handlers, trap handlers return control to the next instruction. The most important use of traps is to provide a procedure-like interface between the user program and the kernel, called a system call.\nUser programs often need to request services from the kernel, such as reading a file (read), creating a new process (fork), loading a new program (execve), or terminating the current process (exit). To allow controlled access to these kernel services, the processor provides a special "syscall n" instruction that can be executed when a user program wants to request service n. Execution of the syscall instruction results in a trap to an exception handler that resolves the arguments and calls the appropriate kernel program.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_14.png",src:a(3275).Z,width:"944",height:"336"}),"\nFrom a programmer's point of view, system calls and normal function calls are the same. However, they are implemented very differently. Ordinary functions run in user mode, which restricts the types of instructions a function can execute, and they can only access the same stack as the calling function. System calls run in kernel mode, which allows system calls to execute privileged instructions and access the stack defined in the kernel."),(0,i.kt)("h2",{id:"fault-handling"},"Fault handling."),(0,i.kt)("p",null,"The fault is caused by an error condition, which may be able to be corrected by the fault handler. When a fault occurs, the processor transfers control to the fault handler. If the handler is able to correct the error condition, it returns control to the instruction that caused the fault and thus re-executes it. Otherwise, the handler returns to the abort routine in the kernel, and the abort routine terminates the application that caused the fault.\n",(0,i.kt)("img",{alt:"img_15.png",src:a(4930).Z,width:"970",height:"326"})),(0,i.kt)("h2",{id:"abort-handling"},"Abort handling."),(0,i.kt)("p",null,"Termination is the result of an unrecoverable fatal error, usually some hardware error such as a parity error that occurs when a DRAM or SRAM bit is corrupted. The termination handler never returns control to the application.\n",(0,i.kt)("img",{alt:"img_16.png",src:a(2329).Z,width:"1010",height:"324"})),(0,i.kt)("h3",{id:"linuxx86-64-exceptions-in-the-system"},"Linux/x86-64 Exceptions in the system"),(0,i.kt)("p",null,"The numbers 0 \u223c 31 correspond to exceptions defined by the Intel architects and are therefore the same for any x86-64 system. 32 \u223c 255 correspond to interrupts and traps defined by the operating system."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Exception Number"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Exozone Class"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"division error"),(0,i.kt)("td",{parentName:"tr",align:"left"},"fault")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"13"),(0,i.kt)("td",{parentName:"tr",align:"left"},"General Protection Fault"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fault")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"14"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Missing page"),(0,i.kt)("td",{parentName:"tr",align:"left"},"fault")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"18"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Machine Check"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Abort")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"32 ~ 255"),(0,i.kt)("td",{parentName:"tr",align:"left"},"OS Defined Exceptions"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Interrupts or Traps")))),(0,i.kt)("h3",{id:"linuxx86-64-failures-and-terminations"},"Linux/x86-64 failures and terminations"),(0,i.kt)("p",null,'Division error (exception 0). An attempt to divide by zero resulted in a result that was too large for the target operand. Floating point exception (Floating exception)\nGeneral protection fault (Exception 13). An undefined area of virtual memory was referenced, or because the program attempted to write a read-only text segment. "Segmentation fault (Segmentation fault)"\nMissing page (Exception 14). Will re-execute The handler maps a page of virtual memory on the appropriate disk to a page of physical memory and then re-executes this instruction that generated the fault.\nMachine check (Exception 18) Occurs when a fatal hardware error is detected. Never returns control to the application.'),(0,i.kt)("h3",{id:"linuxx86-64-system-calls"},"Linux/x86-64 System Calls"),(0,i.kt)("p",null,"Linux Linux provides hundreds of system calls that can be used when an application wants to request a kernel service, including reading a file, writing a file, or creating a new process."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"number"),(0,i.kt)("th",{parentName:"tr",align:"center"},"name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"number"),(0,i.kt)("th",{parentName:"tr",align:"center"},"name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"read"),(0,i.kt)("td",{parentName:"tr",align:"center"},"read the file"),(0,i.kt)("td",{parentName:"tr",align:"center"},"33"),(0,i.kt)("td",{parentName:"tr",align:"center"},"pause"),(0,i.kt)("td",{parentName:"tr",align:"left"},"hang the process until the signal arrives")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"write"),(0,i.kt)("td",{parentName:"tr",align:"center"},"write the file"),(0,i.kt)("td",{parentName:"tr",align:"center"},"37"),(0,i.kt)("td",{parentName:"tr",align:"center"},"alarm"),(0,i.kt)("td",{parentName:"tr",align:"left"},"schedule the transmission of the alarm signal")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"open"),(0,i.kt)("td",{parentName:"tr",align:"center"},"open the file"),(0,i.kt)("td",{parentName:"tr",align:"center"},"39"),(0,i.kt)("td",{parentName:"tr",align:"center"},"getpid"),(0,i.kt)("td",{parentName:"tr",align:"left"},"get the process ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"close"),(0,i.kt)("td",{parentName:"tr",align:"center"},"close the file"),(0,i.kt)("td",{parentName:"tr",align:"center"},"57"),(0,i.kt)("td",{parentName:"tr",align:"center"},"fork"),(0,i.kt)("td",{parentName:"tr",align:"left"},"create the process")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"stat"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Get file information"),(0,i.kt)("td",{parentName:"tr",align:"center"},"59"),(0,i.kt)("td",{parentName:"tr",align:"center"},"execve"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Execute a program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"mmap"),(0,i.kt)("td",{parentName:"tr",align:"center"},"map memory pages to a file"),(0,i.kt)("td",{parentName:"tr",align:"center"},"60"),(0,i.kt)("td",{parentName:"tr",align:"center"},"exit"),(0,i.kt)("td",{parentName:"tr",align:"left"},"terminate a process")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"12"),(0,i.kt)("td",{parentName:"tr",align:"center"},"brk"),(0,i.kt)("td",{parentName:"tr",align:"center"},"reset the top of the heap"),(0,i.kt)("td",{parentName:"tr",align:"center"},"61"),(0,i.kt)("td",{parentName:"tr",align:"center"},"wait4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"wait for a process to terminate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"32"),(0,i.kt)("td",{parentName:"tr",align:"center"},"dup2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Copy a file descriptor"),(0,i.kt)("td",{parentName:"tr",align:"center"},"62"),(0,i.kt)("td",{parentName:"tr",align:"center"},"kill"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Send a signal to a process")))),(0,i.kt)("p",null,"C programs can call any system call directly with the syscall function."),(0,i.kt)("p",null,"On IA32, the Linux system call is called sys_call() via the int 0x80 interrupt, which accesses the interrupt vector table. It passes the system call number through eax; a series of other registers pass the parameters, stored in ebx, ecx, edx, esi, edi, ebp; and the return value is stored in eax.\nThe x86 64 architecture introduces a special instruction, syscall, which does not access the interrupt descriptor table and is much faster. It passes the system call number through rax; a series of other registers pass the parameters (6), stored in rdi, rsi, rdx, r10, r8, r9; the return value is stored in rax."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'#include <unistd_32.h>\nint main()\n{\n    write(1, "hello, world\\n", 13);\n    _exit(0);\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-as"},'.section .data\nstring:\n  .ascii "hello, world\\n"\nstring_end:\n  .equ len, string_end - string\n.section .text\n.globl main\nmain:\n  # First, call write(1, "hello, world\\n", 13)\n  movq $1, %rax                 # write is system call 1\n  movq $1, %rdi                 # Arg1: stdout has descriptor 1\n  movq $string, %rsi            # Arg2: hello world string\n  movq $len, %rdx               # Arg3: string length\n  syscall                       # Make the system call\n\n  # Next, call _exit(0)\n  movq $60, %rax                # _exit is system call 60\n  movq $0, %rdi                 # Arg1: exit status is 0\n  syscall                       # Make the system call\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A process provides each program with its own private address space.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_17.png",src:a(6032).Z,width:"922",height:"882"}),"\nThe bottom portion of the address space is reserved for the user program, with\nthe usual code, data, heap, and stack segments. The code segment always begins at\naddress 0x400000. The top portion of the address space is reserved for the kernel\n(the memory-resident part of the operating system). This part of the address space\ncontains the code, data, and stack that the kernel uses when it executes instructions\non behalf of the process (e.g., when the application program executes a system\ncall)."),(0,i.kt)("h3",{id:"fork"},"Fork"),(0,i.kt)("p",null,"Called once and returned twice.",(0,i.kt)("br",{parentName:"p"}),"\n","Concurrent execution.\nSame but separate address space.\nShared files.\n",(0,i.kt)("img",{alt:"img_18.png",src:a(9765).Z,width:"941",height:"325"})),(0,i.kt)("p",null,"If a parent process terminates, the kernel arranges for the init process to become the adoptive parent of its orphaned processes. init has a PID of 1, is created by the kernel at system startup, does not terminate, and is the ancestor of all processes. If the parent process terminates without reclaiming its dead children, the kernel will schedule the init process to reclaim them. However, long-running programs, such as shells or servers, should always recycle their dead children. Even if the dead child processes are not running, they still consume system memory resources."),(0,i.kt)("p",null,"A process can wait for its child processes to terminate or stop by calling the waitpid function."),(0,i.kt)("p",null,"The waitpid function is a bit complicated. By default (when options=0), waitpid suspends the execution of the calling process until one of its child processes in the wait set terminates. If one of the processes in the wait set has terminated at the moment of the call, then waitpid returns immediately. In both cases, waitpid returns the PID of the terminated child process that caused waitpid to return. at this point, the terminated child process has been reclaimed and the kernel removes all traces of it from the system."),(0,i.kt)("p",null,"The membership of the wait collection is determined by the parameter pid."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If Pid>0, then the wait collection is a single child process with a process ID equal to pid."),(0,i.kt)("li",{parentName:"ul"},"If Pid=-1, then the wait collection is composed of all the children of the parent process.")),(0,i.kt)("p",null,"The argv variable points to an array of pointers ending in null, each of which points to an argument string. By convention, argv","[0]"," is the name of the executable target file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_21.png",src:a(1562).Z,width:"1146",height:"740"}),'\nThe envp variable points to an array of pointers ending in null, each of which points to a string of environment variables, each of which is a name-value pair of the form "name=value".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_19.png",src:a(6627).Z,width:"1252",height:"816"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_22.png",src:a(1).Z,width:"1148",height:"906"})),(0,i.kt)("p",null,"At any given moment, the set of virtual pages is divided into three disjoint subsets."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unallocated: Pages that have not yet been allocated (or created) by the VM system. Unallocated blocks do not have any data associated with them, and therefore do not take up any disk space."),(0,i.kt)("li",{parentName:"ul"},"Cached: Allocated pages that are currently cached in physical memory."),(0,i.kt)("li",{parentName:"ul"},"Uncached: Allocated pages that are not cached in physical memory.")),(0,i.kt)("p",null,"The SRAM cache represents the Ll, L2, and L3 caches located between the CPU and main memory, and the DRAM cache represents the virtual memory.\nDRAM cache to represent the cache of the virtual memory system, which caches virtual pages in the main memory."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_23.png",src:a(73).Z,width:"1327",height:"735"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 1: The processor generates a virtual address and transmits it to the MMU."),(0,i.kt)("li",{parentName:"ul"},"Step 2: The MMU generates a PTE address and requests it from the cache/master."),(0,i.kt)("li",{parentName:"ul"},"Step 3: The cache/main memory returns the PTE to the MMU."),(0,i.kt)("li",{parentName:"ul"},"Step 4: The MMU constructs the physical address and transmits it to the cache/master."),(0,i.kt)("li",{parentName:"ul"},"Step 5: The cache/home memory returns the requested data word to the processor.\n",(0,i.kt)("img",{alt:"img_24.png",src:a(3470).Z,width:"934",height:"803"})),(0,i.kt)("li",{parentName:"ul"},"Steps 1 through 3: Same."),(0,i.kt)("li",{parentName:"ul"},"Step 4: The valid bit in the PTE is zero, so the MMU triggers an exception, passing control from the CPU to the out-of-page exception handler in the OS kernel."),(0,i.kt)("li",{parentName:"ul"},"Step 5: The out-of-page handler determines the sacrificial page in physical memory and swaps it out to disk if the page has been modified."),(0,i.kt)("li",{parentName:"ul"},"Step 6: The out-of-page handler page calls in the new page and updates the PTE in memory."),(0,i.kt)("li",{parentName:"ul"},"Step 7: The missing page handler returns to the original process and executes the instruction that caused the missing page again. the CPU resends the virtual address that caused the missing page to the MMU. since the virtual page is now cached in physical memory, it hits, and after the MMU performs the steps in Figure 9-13b, main memory returns the requested word to the processor.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_25.png",src:a(8742).Z,width:"970",height:"741"})),(0,i.kt)("p",null,"Core i7 Address Translation.\n",(0,i.kt)("img",{alt:"img_26.png",src:a(829).Z,width:"1047",height:"773"})),(0,i.kt)("p",null,"Formatting of entries in Level 1, Level 2 or Level 3 page tables. Requires 4 KB alignment of the physical page table.\n",(0,i.kt)("img",{alt:"img_27.png",src:a(1892).Z,width:"965",height:"586"}),"\nWhen P=1, the address field contains a 40-bit physical page number (PPN), the\nFormat of entries in the fourth level page table. Requires 4 KB alignment of physical pages.\n! ",(0,i.kt)("a",{target:"_blank",href:a(7534).Z},"img_29.png"),"\nAs the MMU translates each virtual address, it also updates the other two bits that will be used by the kernel's missing page handler. Each time a page is accessed, the MMU sets an A bit, called the reference bit. The kernel can use this reference bit to implement its page replacement algorithm. Each time a page is written to, the MMU sets the D bit, also known as the modify bit or dirty bit. The modify bit tells the kernel whether it must write back to the sacrificial page before copying the replacement page. The kernel can clear the reference or modification bit by calling a special kernel mode instruction."),(0,i.kt)("p",null,"How the Core i7 MMU uses a four-level page table to translate virtual addresses to physical addresses.\n",(0,i.kt)("img",{alt:"img_28.png",src:a(7972).Z,width:"1114",height:"645"})),(0,i.kt)("p",null,"Virtual memory for 1 Linux process\n",(0,i.kt)("img",{alt:"img_30.png",src:a(9967).Z,width:"562",height:"728"}),"\nAn area (area) is a contiguous slice (chunk) of virtual memory that already exists (has been allocated), and these pages are associated in some way.\nCode segments, data segments, heap, shared library segments, and user stacks are all different areas. Every virtual page that exists is kept in a certain area, while virtual pages that do not belong to a certain area do not exist and cannot be referenced by processes.\nThe kernel maintains a separate task structure (task_struct in the source code) for each process in the system. The elements in the task structure contain or point to all the information the kernel needs to run the process (e.g., the PID, a pointer to the user stack, the name of the executable target file, and the program counter).\nAn entry in the task structure points to mm_struct, which describes the current state of the virtual memory. The two fields of interest are pgd and mmap, where pgd points to the base address of the first-level page table (page global directory), and mmap points to a chain of vm_area_structs (area structures), where each vm_area_struct describes an area of the current virtual address space. When the kernel runs this process, it stores the pgd in the CR3 control register. \\\nvm_start: points to the start of this area. \\\nvm_end: points to the end of this region. \\\nvm_prot: describes the read and write permissions for all pages contained in this region. \\\nvm_flags: describes whether the pages in this region are shared with other processes or are private to this process (also describes some other information). \\\nvm_next: points to the next-region structure in the chain. \\\n",(0,i.kt)("img",{alt:"img_31.png",src:a(2291).Z,width:"952",height:"663"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_32.png",src:a(2432).Z,width:"785",height:"597"})),(0,i.kt)("p",null,"Loading and running a.out requires the following steps.\n1.",(0,i.kt)("strong",{parentName:"p"},"Remove the already existing user area."),"Delete the existing region structure in the user part of the current process virtual address.\n2.",(0,i.kt)("strong",{parentName:"p"},"Map private areas."),"Create new area structures for the code, data, bss, and stack areas of the new program. All of these new areas are private, copy-on-write. The code and data areas are mapped to the .text and .stack areas in the a.out file. text and . The bss area is requested for binary zeros and is mapped to an anonymous file whose size is contained in a.out. The stack and heap regions are also requesting binary zeros and have an initial length of zero. Figure 9-31 summarizes the different mappings of private regions. 3.\n3.",(0,i.kt)("strong",{parentName:"p"},"Mapping shared areas."),"If the a.out program is linked to a shared object (or target), such as the standard C library libc.so, then these objects are dynamically linked to this program and then mapped into a shared area in the user's virtual address space.\n4.",(0,i.kt)("strong",{parentName:"p"},"Set the program counter (PC). The last thing"),"execve does is set the program counter in the context of the current process to point to the entry point of the code area."),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"img_33.png",src:a(7075).Z,width:"445",height:"596"})),(0,i.kt)("p",null,"1.",(0,i.kt)("strong",{parentName:"p"},"explicit allocator"),", which requires the application to explicitly free any allocated blocks. For example, the C standard library provides an explicit allocator called the malloc package. The new and delete operators in C++ are equivalent to malloc and free in C. 2.\n2.",(0,i.kt)("strong",{parentName:"p"},"implicit allocator"),", on the other hand, requires the allocator to detect when an allocated block is no longer in use by the program, and then release the block. An implicit allocator is also called a",(0,i.kt)("strong",{parentName:"p"},"garbage collector"),", and the process of automatically releasing unused allocated blocks is called",(0,i.kt)("strong",{parentName:"p"},"garbage collection"),". High-level languages such as Lisp, ML, and Java, for example, rely on garbage collection to release allocated blocks."),(0,i.kt)("p",null,"The malloc function returns a pointer to a block of memory at least size bytes in size, which is aligned for any data object types that may be contained within the block. In practice, the alignment depends on whether the compiled code is running in 32-bit mode (gcc -m32) or 64-bit mode (the default). In 32-bit mode, the address of the block returned by malloc is always a multiple of 8. In 64-bit mode, the address is always a multiple of 16.\nThe sbrk function expands and shrinks the heap by adding incr to the kernel's brk pointer. If it succeeds, it returns the old value of brk, otherwise it returns -1 and sets errno to ENOMEM. sbrk returns the current value of brk if incr is zero. Calling sbrk with a negative incr is legal and clever because the return value (the old value of brk) points to abs(incr) bytes up from the top of the new heap.\nThe program is freeing the allocated heap block by calling the free function.\n",(0,i.kt)("img",{alt:"img_34.png",src:a(4317).Z,width:"553",height:"649"}),"\na: The program requests a 4-word block. malloc responds by cutting a 4-word block from the front of the free block and returning a pointer to the first word of the block.\nb: The program requests a 5-word block. malloc responds by allocating a 6-word block from the front of the free block. In this case, malloc fills the block with an extra word, in order to keep the free block to be double word boundary aligned.\nc: The program requests a 6-word block, and malloc cuts a 6-word block from the front of the free block.\nd: The program frees the 6-character block allocated in b. Note that after the call to free returns, the pointer p2 still points to the freed block. It is the responsibility of the application to not use p2 again until it is reinitialized by a new malloc call.\ne: The program requests a 2-character block. In this case, malloc allocates a portion of the block that was freed in the previous step and returns a pointer to this new block."),(0,i.kt)("p",null,"Explicit allocator constraints.\n1.",(0,i.kt)("strong",{parentName:"p"},"Handle arbitrary sequences of requests.")," An application can have an arbitrary sequence of allocation and release requests, as long as the constraint is satisfied: each release request must correspond to a currently allocated block that was obtained from a previous allocation request. Thus, the allocator cannot assume a sequence of allocation and release requests. For example, the allocator cannot assume that all allocation requests have matching release requests, or that there are matching allocation and free requests that are nested.\n2.",(0,i.kt)("strong",{parentName:"p"},"Immediate response to requests.")," Allocators must respond to allocation requests immediately. Therefore, the allocator is not allowed to rearrange or buffer requests to improve performance.\n3.",(0,i.kt)("strong",{parentName:"p"},"Use only the heap."),"In order for the allocator to be scalable, any non-scalar data structures used by the allocator must be stored in the heap.\n4.",(0,i.kt)("strong",{parentName:"p"},"Align blocks (alignment requirements)."),"Allocators must align blocks so that they can hold any type of data object.\n5.",(0,i.kt)("strong",{parentName:"p"},"Do not modify allocated blocks."),"Allocators can only manipulate or change free blocks. In particular, once a block has been allocated, it is not allowed to be modified or moved. Therefore, techniques such as compression of allocated blocks are not allowed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_35.png",src:a(3694).Z,width:"837",height:"332"}),"The format of a simple heap block\nIf we impose a double-word alignment constraint, then the block size is always a multiple of 8 and the lowest 3 bits of the block size are always zero. Therefore, we only need the 29 high bits of the memory size and free the remaining 3 bits to encode other information. In this case, we use the lowest bit (the allocated bit) to indicate whether the block is allocated or free. For example, suppose we have an allocated block with a size of 24 (0x18) bytes. Then its header will be"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"0x00000018 | 0x1 = 0x00000019")),(0,i.kt)("p",null,"Similarly, a free block with a block size of 40 (0x28) bytes has the following header."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"0x00000028 | 0x0 = 0x00000028")),(0,i.kt)("p",null,"Following the header is the payload requested by the application when malloc is called. The payload is followed by a piece of unused padding, which can be of arbitrary size. Padding is needed for a number of reasons. For example, padding may be part of an allocator strategy to deal with external fragmentation. Or it may also be needed to meet alignment requirements."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_36.png",src:a(1540).Z,width:"1104",height:"160"}),"\nOrganize the heap with an implicit free link table. The shaded parts are allocated blocks. The unshaded part is the free block. The header is marked (size in bytes / allocated bits)\nthen the size of each block must be a multiple of a double word (8 bytes). Thus, resulting in a minimum block size of two words: one word for the header and another word to maintain alignment requirements. Even if the application requests only one byte, the allocator still needs to create a two-word block.\nThe advantage of an implicit free link table is its simplicity. The significant disadvantage is that the overhead of any operation, such as placing an allocated block, requires a search of the idle chain table, and the time required for that search is linearly related to the total number of allocated and idle blocks in the heap."))}d.isMDXComponent=!0},7534:function(e,t,a){t.Z=a.p+"assets/files/img_29-88bbd4f26421bac9f1c4acedc0cab88d.png"},2948:function(e,t,a){t.Z=a.p+"assets/images/img_11-a6b1ee91d133ea85c07ca53796d56865.png"},2668:function(e,t,a){t.Z=a.p+"assets/images/img_12-293f1e45dbefd4492a52f68b76430af4.png"},9132:function(e,t,a){t.Z=a.p+"assets/images/img_13-18afad785386bd7d289486e98768268d.png"},3275:function(e,t,a){t.Z=a.p+"assets/images/img_14-66f20dc214a17879306ea7e74f4721b7.png"},4930:function(e,t,a){t.Z=a.p+"assets/images/img_15-eb87aac9eabd1852657d1106ded68be2.png"},2329:function(e,t,a){t.Z=a.p+"assets/images/img_16-0fa205ab6ed1df8ff13ffd36d3ac28fa.png"},6032:function(e,t,a){t.Z=a.p+"assets/images/img_17-3b89551411862ef4cd85ef912501cf87.png"},9765:function(e,t,a){t.Z=a.p+"assets/images/img_18-c3004995acf19ac52ee25577e6bc0d99.png"},6627:function(e,t,a){t.Z=a.p+"assets/images/img_19-e7f161697e246df5430dd6169a0228cb.png"},1562:function(e,t,a){t.Z=a.p+"assets/images/img_21-05b28cdf75bce2df17eadcd5b1aa2b12.png"},1:function(e,t,a){t.Z=a.p+"assets/images/img_22-75dc9173287ee640b66c6560a7a95c6b.png"},73:function(e,t,a){t.Z=a.p+"assets/images/img_23-49a90da73609d0273c04516dcd327695.png"},3470:function(e,t,a){t.Z=a.p+"assets/images/img_24-b4098c54b31796997de1ed444f427b4f.png"},8742:function(e,t,a){t.Z=a.p+"assets/images/img_25-b91f2762afcca85898a1350b9986854f.png"},829:function(e,t,a){t.Z=a.p+"assets/images/img_26-d102c4ed20c54c6769f68be82735839f.png"},1892:function(e,t,a){t.Z=a.p+"assets/images/img_27-d0eb480bd01628bb868640e592d3ad59.png"},7972:function(e,t,a){t.Z=a.p+"assets/images/img_28-cf66700a7b2d28896cefa1b1cd5ae0d3.png"},9967:function(e,t,a){t.Z=a.p+"assets/images/img_30-5ff70a02f1be3297c3ac21eca995ce51.png"},2291:function(e,t,a){t.Z=a.p+"assets/images/img_31-20645c7ae6e5a6d6b7a93bbf9b83a900.png"},2432:function(e,t,a){t.Z=a.p+"assets/images/img_32-d20b74dd11209a8e4dadf52bfb33b58a.png"},7075:function(e,t,a){t.Z=a.p+"assets/images/img_33-391303c425b206adff0429f2fe6d4c3b.png"},4317:function(e,t,a){t.Z=a.p+"assets/images/img_34-1034c631a991255000ee0d5065dcaa9a.png"},3694:function(e,t,a){t.Z=a.p+"assets/images/img_35-3394a44b4a0f939965192b20f8aef179.png"},1540:function(e,t,a){t.Z=a.p+"assets/images/img_36-1a6fbc79a2945ec93bd879e2a377fa1d.png"}}]);