// Snowfall Effect
const snowfallContainer = document.getElementById('snowfall');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  snowflake.style.opacity = Math.random();
  snowflake.style.width = `${Math.random() * 10 + 5}px`;
  snowflake.style.height = snowflake.style.width;
  snowfallContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

setInterval(createSnowflake, 100);
