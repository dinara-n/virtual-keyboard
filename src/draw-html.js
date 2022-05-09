function drawHtml() {
  const main = document.createElement('main');
  main.innerHTML = `
  <h1>Virtual Keyboard</h1>
  <textarea class="display" name="display" id="display" cols="100" rows="15"></textarea>
  <section class="keyboard">
      <button class="btn btn--regular btn--backquote" type="button">
          <span class="en en-upper">~</span>
          <span class="en en-lower">\`</span>
          <span class="en ru-upper">Ё</span>
          <span class="en ru-lower">ё</span>
      </button>
      <button class="btn btn--regular btn--1" type="button">
          <span class="en en-upper">!</span>
          <span class="en en-lower">1</span>
          <span class="en ru-upper">!</span>
          <span class="en ru-lower">1</span>
      </button>
      <button class="btn btn--regular btn--2" type="button">
          <span class="en en-upper">@</span>
          <span class="en en-lower">2</span>
          <span class="en ru-upper">"</span>
          <span class="en ru-lower">2</span>
      </button>
      <button class="btn btn--regular btn--3" type="button">
          <span class="en en-upper">#</span>
          <span class="en en-lower">3</span>
          <span class="en ru-upper">№</span>
          <span class="en ru-lower">3</span>
      </button>
      <button class="btn btn--regular btn--4" type="button">
          <span class="en en-upper">$</span>
          <span class="en en-lower">4</span>
          <span class="en ru-upper">;</span>
          <span class="en ru-lower">4</span>
      </button>
      <button class="btn btn--regular btn--5" type="button">
          <span class="en en-upper">%</span>
          <span class="en en-lower">5</span>
          <span class="en ru-upper">%</span>
          <span class="en ru-lower">5</span>
      </button>
      <button class="btn btn--regular btn--6" type="button">
          <span class="en en-upper">^</span>
          <span class="en en-lower">6</span>
          <span class="en ru-upper">:</span>
          <span class="en ru-lower">6</span>
      </button>
      <button class="btn btn--regular btn--7" type="button">
          <span class="en en-upper">&</span>
          <span class="en en-lower">7</span>
          <span class="en ru-upper">?</span>
          <span class="en ru-lower">7</span>
      </button>
      <button class="btn btn--regular btn--8" type="button">
          <span class="en en-upper">*</span>
          <span class="en en-lower">8</span>
          <span class="en ru-upper">*</span>
          <span class="en ru-lower">8</span>
      </button>
      <button class="btn btn--regular btn--9" type="button">
          <span class="en en-upper">(</span>
          <span class="en en-lower">9</span>
          <span class="en ru-upper">(</span>
          <span class="en ru-lower">9</span>
      </button>
      <button class="btn btn--regular btn--0" type="button">
          <span class="en en-upper">)</span>
          <span class="en en-lower">0</span>
          <span class="en ru-upper">)</span>
          <span class="en ru-lower">0</span>
      </button>
      <button class="btn btn--regular btn--minus" type="button">
          <span class="en en-upper">_</span>
          <span class="en en-lower">-</span>
          <span class="en ru-upper">_</span>
          <span class="en ru-lower">-</span>
      </button>
      <button class="btn btn--regular btn--equal" type="button">
          <span class="en en-upper">+</span>
          <span class="en en-lower">=</span>
          <span class="en ru-upper">+</span>
          <span class="en ru-lower">=</span>
      </button>
      <button class="btn btn--special btn--backspace" type="button">Backspace</button>
  
      <button class="btn btn--special btn--tab" type="button">Tab</button>
      <button class="btn btn--regular btn--q" type="button">
          <span class="en en-upper">Q</span>
          <span class="en en-lower">q</span>
          <span class="en ru-upper">Й</span>
          <span class="en ru-lower">й</span>
      </button>
      <button class="btn btn--regular btn--w" type="button">
          <span class="en en-upper">W</span>
          <span class="en en-lower">w</span>
          <span class="en ru-upper">Ц</span>
          <span class="en ru-lower">ц</span>
      </button>
      <button class="btn btn--regular btn--e" type="button">
          <span class="en en-upper">E</span>
          <span class="en en-lower">e</span>
          <span class="en ru-upper">У</span>
          <span class="en ru-lower">у</span>
      </button>
      <button class="btn btn--regular btn--r" type="button">
          <span class="en en-upper">R</span>
          <span class="en en-lower">r</span>
          <span class="en ru-upper">К</span>
          <span class="en ru-lower">к</span>
      </button>
      <button class="btn btn--regular btn--t" type="button">
          <span class="en en-upper">T</span>
          <span class="en en-lower">t</span>
          <span class="en ru-upper">Е</span>
          <span class="en ru-lower">е</span>
      </button>
      <button class="btn btn--regular btn--y" type="button">
          <span class="en en-upper">Y</span>
          <span class="en en-lower">y</span>
          <span class="en ru-upper">Н</span>
          <span class="en ru-lower">н</span>
      </button>
      <button class="btn btn--regular btn--u" type="button">
          <span class="en en-upper">U</span>
          <span class="en en-lower">u</span>
          <span class="en ru-upper">Г</span>
          <span class="en ru-lower">г</span>
      </button>
      <button class="btn btn--regular btn--i" type="button">
          <span class="en en-upper">I</span>
          <span class="en en-lower">i</span>
          <span class="en ru-upper">Ш</span>
          <span class="en ru-lower">ш</span>
      </button>
      <button class="btn btn--regular btn--o" type="button">
          <span class="en en-upper">O</span>
          <span class="en en-lower">o</span>
          <span class="en ru-upper">Щ</span>
          <span class="en ru-lower">щ</span>
      </button>
      <button class="btn btn--regular btn--p" type="button">
          <span class="en en-upper">P</span>
          <span class="en en-lower">p</span>
          <span class="en ru-upper">З</span>
          <span class="en ru-lower">з</span>
      </button>
      <button class="btn btn--regular btn--bracketL" type="button">
          <span class="en en-upper">{</span>
          <span class="en en-lower">[</span>
          <span class="en ru-upper">Х</span>
          <span class="en ru-lower">х</span>
      </button>
      <button class="btn btn--regular btn--bracketR" type="button">
          <span class="en en-upper">}</span>
          <span class="en en-lower">]</span>
          <span class="en ru-upper">Ъ</span>
          <span class="en ru-lower">ъ</span>
      </button>
      <button class="btn btn--regular btn--backslash" type="button">
          <span class="en en-upper">|</span>
          <span class="en en-lower">\\</span>
          <span class="en ru-upper">/</span>
          <span class="en ru-lower">\\</span>
      </button>
      <button class="btn btn--special btn--del" type="button">Del</button>
  
      <button class="btn btn--special btn--capslock" type="button">CapsLock</button>
      <button class="btn btn--regular btn--a" type="button">
          <span class="en en-upper">A</span>
          <span class="en en-lower">a</span>
          <span class="en ru-upper">Ф</span>
          <span class="en ru-lower">ф</span>
      </button>
      <button class="btn btn--regular btn--s" type="button">
          <span class="en en-upper">S</span>
          <span class="en en-lower">s</span>
          <span class="en ru-upper">Ы</span>
          <span class="en ru-lower">ы</span>
      </button>
      <button class="btn btn--regular btn--d" type="button">
          <span class="en en-upper">D</span>
          <span class="en en-lower">d</span>
          <span class="en ru-upper">В</span>
          <span class="en ru-lower">в</span>
      </button>
      <button class="btn btn--regular btn--f" type="button">
          <span class="en en-upper">F</span>
          <span class="en en-lower">f</span>
          <span class="en ru-upper">А</span>
          <span class="en ru-lower">а</span>
      </button>
      <button class="btn btn--regular btn--g" type="button">
          <span class="en en-upper">G</span>
          <span class="en en-lower">g</span>
          <span class="en ru-upper">П</span>
          <span class="en ru-lower">п</span>
      </button>
      <button class="btn btn--regular btn--h" type="button">
          <span class="en en-upper">H</span>
          <span class="en en-lower">h</span>
          <span class="en ru-upper">Р</span>
          <span class="en ru-lower">р</span>
      </button>
      <button class="btn btn--regular btn--j" type="button">
          <span class="en en-upper">J</span>
          <span class="en en-lower">j</span>
          <span class="en ru-upper">О</span>
          <span class="en ru-lower">о</span>
      </button>
      <button class="btn btn--regular btn--k" type="button">
          <span class="en en-upper">K</span>
          <span class="en en-lower">k</span>
          <span class="en ru-upper">Л</span>
          <span class="en ru-lower">л</span>
      </button>
      <button class="btn btn--regular btn--l" type="button">
          <span class="en en-upper">L</span>
          <span class="en en-lower">l</span>
          <span class="en ru-upper">Д</span>
          <span class="en ru-lower">д</span>
      </button>
      <button class="btn btn--regular btn--semicolon" type="button">
          <span class="en en-upper">:</span>
          <span class="en en-lower">;</span>
          <span class="en ru-upper">Ж</span>
          <span class="en ru-lower">ж</span>
      </button>
      <button class="btn btn--regular btn--quote" type="button">
          <span class="en en-upper">"</span>
          <span class="en en-lower">'</span>
          <span class="en ru-upper">Э</span>
          <span class="en ru-lower">э</span>
      </button>
      <button class="btn btn--special btn--enter" type="button">Enter</button>
  
      <button class="btn btn--special btn--shift btn--shift-left" type="button">Shift</button>
      <button class="btn btn--regular btn--z" type="button">
          <span class="en en-upper">Z</span>
          <span class="en en-lower">z</span>
          <span class="en ru-upper">Я</span>
          <span class="en ru-lower">я</span>
      </button>
      <button class="btn btn--regular btn--x" type="button">
          <span class="en en-upper">X</span>
          <span class="en en-lower">x</span>
          <span class="en ru-upper">Ч</span>
          <span class="en ru-lower">ч</span>
      </button>
      <button class="btn btn--regular btn--c" type="button">
          <span class="en en-upper">C</span>
          <span class="en en-lower">c</span>
          <span class="en ru-upper">С</span>
          <span class="en ru-lower">с</span>
      </button>
      <button class="btn btn--regular btn--v" type="button">
          <span class="en en-upper">V</span>
          <span class="en en-lower">v</span>
          <span class="en ru-upper">М</span>
          <span class="en ru-lower">м</span>
      </button>
      <button class="btn btn--regular btn--b" type="button">
          <span class="en en-upper">B</span>
          <span class="en en-lower">b</span>
          <span class="en ru-upper">И</span>
          <span class="en ru-lower">и</span>
      </button>
      <button class="btn btn--regular btn--n" type="button">
          <span class="en en-upper">N</span>
          <span class="en en-lower">n</span>
          <span class="en ru-upper">Т</span>
          <span class="en ru-lower">т</span>
      </button>
      <button class="btn btn--regular btn--m" type="button">
          <span class="en en-upper">M</span>
          <span class="en en-lower">m</span>
          <span class="en ru-upper">Ь</span>
          <span class="en ru-lower">ь</span>
      </button>
      <button class="btn btn--regular btn--comma" type="button">
          <span class="en en-upper">&lt;</span>
          <span class="en en-lower">,</span>
          <span class="en ru-upper">Б</span>
          <span class="en ru-lower">б</span>
      </button>
      <button class="btn btn--regular btn--dot" type="button">
          <span class="en en-upper">&gt;</span>
          <span class="en en-lower">.</span>
          <span class="en ru-upper">Ю</span>
          <span class="en ru-lower">ю</span>
      </button>
      <button class="btn btn--regular btn--question" type="button">
          <span class="en en-upper">?</span>
          <span class="en en-lower">/</span>
          <span class="en ru-upper">,</span>
          <span class="en ru-lower">.</span>
      </button>
      <button class="btn btn--special btn--arrow btn--up" type="button">&uarr;</button>
      <button class="btn btn--special btn--shift btn-shift-right" type="button">Shift</button>
  
      <button class="btn btn--special btn--ctrl" type="button">Ctrl</button>
      <button class="btn btn--special" type="button">Win</button>
      <button class="btn btn--special btn--alt" type="button">Alt</button>
      <button class="btn btn--special btn--space" type="button"> </button>
      <button class="btn btn--special btn--alt" type="button">Alt</button>
      <button class="btn btn--special btn--arrow btn--left" type="button">&larr;</button>
      <button class="btn btn--special btn--arrow btn--down" type="button">&darr;</button>
      <button class="btn btn--special btn--arrow btn--right" type="button">&rarr;</button>
      <button class="btn btn--special btn--ctrl" type="button">Ctrl</button>
  </section>
  <p>Created on Windows OS</p>
  <p>To change the language press <b>Alt</b> on the keyboard</p>
  `;
  document.body.append(main);
}

export default drawHtml;
