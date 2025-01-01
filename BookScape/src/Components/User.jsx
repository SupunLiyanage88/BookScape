import React from 'react';
import './user.css';

const User = () => {
  return (
    <div className="">
        <div class="banter-loader">
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        </div>

        <div class="text-center mt-[20rem] md:mb-[20rem]">
        <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
        <p class="text-zinc-600 dark:text-zinc-400">
        The user page is under development.
        </p>
        </div>
    </div>

    
  );
};

export default User;
