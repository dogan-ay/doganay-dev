import React from 'react' 
import Link from 'next/link'
const PersonalLinks = () => {
  return (
    <div className='personal-links'>
        <div className='small-line'></div>
        <div className='personal-links-icon'>
            <span className='github-icon'>
              <Link href='https://www.github.com/'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='github-inner' d="M13.5733 22.6773C13.7333 22.6773 13.8547 22.672 13.9347 22.6613C14.0285 22.6423 14.1131 22.592 14.1747 22.5187C14.2547 22.4347 14.2947 22.3133 14.2947 22.1533L14.2893 21.4107C14.2853 20.9373 14.284 20.5613 14.284 20.2853L14.0333 20.3293C13.8327 20.3609 13.6296 20.3734 13.4267 20.3667C13.1717 20.3622 12.9175 20.3367 12.6667 20.2907C12.4005 20.241 12.15 20.1286 11.936 19.9627C11.7117 19.793 11.5443 19.5591 11.456 19.292L11.3467 19.04C11.2547 18.8415 11.1392 18.6549 11.0027 18.484C10.8801 18.3088 10.7167 18.166 10.5267 18.068L10.4507 18.0147C10.3983 17.9761 10.3509 17.9313 10.3093 17.8813C10.269 17.8359 10.2358 17.7847 10.2107 17.7293C10.1893 17.6787 10.2067 17.636 10.264 17.604C10.3646 17.5636 10.4732 17.5467 10.5813 17.5547L10.8 17.588C10.9467 17.616 11.1267 17.704 11.3413 17.8493C11.5547 17.996 11.732 18.184 11.8707 18.4173C12.0387 18.716 12.24 18.944 12.4773 19.1C12.6868 19.2477 12.9357 19.3295 13.192 19.3347C13.432 19.3347 13.64 19.3173 13.8147 19.2813C13.9847 19.2461 14.1499 19.1906 14.3067 19.116C14.372 18.6293 14.5493 18.2533 14.84 17.992C14.4626 17.9547 14.0887 17.8887 13.7213 17.7947C13.3627 17.6958 13.0178 17.5525 12.6947 17.368C12.3563 17.1844 12.0573 16.9362 11.8147 16.6373C11.5827 16.3453 11.392 15.964 11.2413 15.4907C11.0842 14.9589 11.0092 14.4064 11.0187 13.852C11.0187 12.972 11.3067 12.2213 11.8813 11.6027C11.612 10.94 11.6373 10.1973 11.9573 9.37466C12.1693 9.308 12.4827 9.35733 12.8973 9.52133C13.312 9.68533 13.6173 9.82533 13.8093 9.94266C14.0027 10.0587 14.156 10.156 14.2733 10.236C14.9562 10.0463 15.6619 9.95123 16.3707 9.95333C17.0907 9.95333 17.7907 10.0467 18.468 10.2373L18.8813 9.97466C19.1667 9.80133 19.5013 9.64 19.8867 9.49466C20.2733 9.348 20.568 9.308 20.772 9.37466C21.1 10.1973 21.1293 10.94 20.8587 11.6013C21.4347 12.2213 21.7227 12.9707 21.7227 13.852C21.7227 14.4707 21.648 15.0187 21.4987 15.496C21.3493 15.9733 21.156 16.3547 20.92 16.6427C20.6734 16.9386 20.373 17.1851 20.0347 17.3693C19.7116 17.5539 19.3667 17.6972 19.008 17.796C18.6402 17.8897 18.2658 17.9552 17.888 17.992C18.2667 18.3187 18.456 18.836 18.456 19.5427V22.152C18.456 22.276 18.4747 22.376 18.5107 22.4533C18.5276 22.4902 18.5518 22.5232 18.5818 22.5505C18.6118 22.5777 18.647 22.5987 18.6853 22.612C18.7653 22.64 18.8373 22.6587 18.8987 22.6653C18.9613 22.6733 19.0493 22.6773 19.1653 22.6773H16.544H13.5747H13.5733Z" fill="white"/>
              <path className='github-outer' d="M8 5.33333C7.29275 5.33333 6.61448 5.61428 6.11438 6.11438C5.61428 6.61448 5.33333 7.29275 5.33333 8V24C5.33333 24.7072 5.61428 25.3855 6.11438 25.8856C6.61448 26.3857 7.29275 26.6667 8 26.6667H24C24.7072 26.6667 25.3855 26.3857 25.8856 25.8856C26.3857 25.3855 26.6667 24.7072 26.6667 24V8C26.6667 7.29275 26.3857 6.61448 25.8856 6.11438C25.3855 5.61428 24.7072 5.33333 24 5.33333H8ZM8 2.66666H24C25.4145 2.66666 26.771 3.22857 27.7712 4.22876C28.7714 5.22896 29.3333 6.58551 29.3333 8V24C29.3333 25.4145 28.7714 26.771 27.7712 27.7712C26.771 28.7714 25.4145 29.3333 24 29.3333H8C6.58551 29.3333 5.22896 28.7714 4.22876 27.7712C3.22857 26.771 2.66666 25.4145 2.66666 24V8C2.66666 6.58551 3.22857 5.22896 4.22876 4.22876C5.22896 3.22857 6.58551 2.66666 8 2.66666V2.66666Z" fill="white"/>
              </svg>
              </Link>
            </span>
            <span className='twitter-icon'>
              <Link href='https://twitter.com/'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='twitter-inner' d="M22.6667 11.9293C22.176 12.1427 21.6493 12.2893 21.096 12.3533C21.6613 12.02 22.0933 11.492 22.2987 10.864C21.768 11.172 21.184 11.3973 20.56 11.5173C20.3025 11.2474 19.9927 11.0328 19.6496 10.8866C19.3064 10.7403 18.937 10.6655 18.564 10.6667C17.0533 10.6667 15.8293 11.8733 15.8293 13.36C15.8293 13.5707 15.8533 13.776 15.9 13.9733C14.8164 13.9219 13.7555 13.6451 12.7849 13.1607C11.8142 12.6763 10.9552 11.9949 10.2627 11.16C10.0194 11.5695 9.89135 12.0371 9.892 12.5133C9.892 13.4467 10.376 14.2733 11.1093 14.7547C10.6753 14.7411 10.2505 14.6255 9.86933 14.4173V14.4507C9.87345 15.0766 10.0944 15.6818 10.4946 16.1631C10.8947 16.6445 11.4493 16.9723 12.064 17.0907C11.6605 17.1974 11.2383 17.2129 10.828 17.136C11.0068 17.6745 11.3489 18.1439 11.8067 18.4792C12.2645 18.8144 12.8153 18.9988 13.3827 19.0067C12.4093 19.7567 11.2142 20.162 9.98533 20.1587C9.76533 20.1587 9.548 20.1453 9.33333 20.1213C10.5873 20.9151 12.0413 21.3354 13.5253 21.3333C18.5573 21.3333 21.308 17.2293 21.308 13.6693L21.2987 13.32C21.8351 12.943 22.2986 12.4719 22.6667 11.9293Z" fill="white"/>
              <path className='twitter-outer' d="M8 5.33333C7.29276 5.33333 6.61448 5.61428 6.11438 6.11438C5.61429 6.61448 5.33333 7.29275 5.33333 8V24C5.33333 24.7072 5.61429 25.3855 6.11438 25.8856C6.61448 26.3857 7.29276 26.6667 8 26.6667H24C24.7072 26.6667 25.3855 26.3857 25.8856 25.8856C26.3857 25.3855 26.6667 24.7072 26.6667 24V8C26.6667 7.29275 26.3857 6.61448 25.8856 6.11438C25.3855 5.61428 24.7072 5.33333 24 5.33333H8ZM8 2.66666H24C25.4145 2.66666 26.771 3.22857 27.7712 4.22876C28.7714 5.22896 29.3333 6.58551 29.3333 8V24C29.3333 25.4145 28.7714 26.771 27.7712 27.7712C26.771 28.7714 25.4145 29.3333 24 29.3333H8C6.58551 29.3333 5.22896 28.7714 4.22877 27.7712C3.22857 26.771 2.66667 25.4145 2.66667 24V8C2.66667 6.58551 3.22857 5.22896 4.22877 4.22876C5.22896 3.22857 6.58551 2.66666 8 2.66666V2.66666Z" fill="white"/>
              </svg>
              </Link>
            </span>
            <span className='linkedin-icon'>
              <Link href='https://linkedin.com/'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='linkedin-inner' d="M22.6667 17.5067V22.436H19.8093V17.836C19.8093 16.6813 19.396 15.8933 18.3613 15.8933C17.572 15.8933 17.1013 16.424 16.8947 16.9387C16.82 17.1227 16.8 17.3787 16.8 17.6347V22.436H13.9413C13.9413 22.436 13.98 14.6467 13.9413 13.84H16.8V15.0573L16.7813 15.0853H16.8V15.0587C17.18 14.472 17.8573 13.6373 19.376 13.6373C21.256 13.6373 22.6667 14.8667 22.6667 17.5067ZM10.9507 9.69466C9.97333 9.69466 9.33333 10.3373 9.33333 11.18C9.33333 12.0067 9.95467 12.6667 10.9133 12.6667H10.932C11.9293 12.6667 12.5493 12.0053 12.5493 11.18C12.5307 10.3373 11.9293 9.69466 10.9507 9.69466ZM9.50267 22.436H12.3613V13.84H9.50267V22.436Z" fill="white"/>
              <path className='linkedin-outer' d="M8 5.33333C7.29276 5.33333 6.61448 5.61428 6.11438 6.11438C5.61428 6.61448 5.33333 7.29275 5.33333 8V24C5.33333 24.7072 5.61428 25.3855 6.11438 25.8856C6.61448 26.3857 7.29276 26.6667 8 26.6667H24C24.7072 26.6667 25.3855 26.3857 25.8856 25.8856C26.3857 25.3855 26.6667 24.7072 26.6667 24V8C26.6667 7.29275 26.3857 6.61448 25.8856 6.11438C25.3855 5.61428 24.7072 5.33333 24 5.33333H8ZM8 2.66666H24C25.4145 2.66666 26.771 3.22857 27.7712 4.22876C28.7714 5.22896 29.3333 6.58551 29.3333 8V24C29.3333 25.4145 28.7714 26.771 27.7712 27.7712C26.771 28.7714 25.4145 29.3333 24 29.3333H8C6.58551 29.3333 5.22896 28.7714 4.22876 27.7712C3.22857 26.771 2.66667 25.4145 2.66667 24V8C2.66667 6.58551 3.22857 5.22896 4.22876 4.22876C5.22896 3.22857 6.58551 2.66666 8 2.66666V2.66666Z" fill="white"/>
              </svg>
              </Link>
            </span>
        </div>
        <div className='small-line'></div>
    </div>
  )
}

export default PersonalLinks