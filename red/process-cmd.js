
function proccessCMD(cmd) {
  cmd = cmd.trim().toLowerCase();
  //there is only one command here. But you get the idea. Plug in your API call here.
  switch (cmd) {
    case "--help":
      return `<p class='output'><b>Commissions --</b> Gives you basics about Ellexide Codes commissions and a link to a more indepth information.</p>
      <p class='output'><b>Requests --</b> Information about code requests</p>
      <p class='output'><b>Code Raffles --</b> Information about upcoming raffle draws</p>
      <p class='output'><b>FAQ --</b> Ellexide Codes frequently asked questions</p>
      <p class='output'><b>Codes --</b> A showcase of top finished commissions</p>
      <p class='output'><b>Pending --</b> A showcase of the current commission list</p>
      <p class='output'><b>Contact --</b> Shows contact information</p>
      <p class='output'><b>Coders --</b> A list of Elle's all time favourite coders</p>
      <p class='output errorcode'>More commands to come</p>`;
    case "commissions":
      return `<p class='output'><b><u>Commissions</u></b><br>
        Ellexide Codes commissions are usually introduced in RPC and continued in <i class="tooltip" title="Lil Monster#3557">Discord</i>.<br> 
        There are only a few things needed for commissioning a code and that is a greeting (be nice to me!), face claim/s, 
        general personality information, and budget. <br>
        For more information visit <a href="https://pastebin.com/YXRQA3da" target="_blank">Pastebin</a> or <a href="https://ellexide-codes.tumblr.com/commissions" target="_blank">Tumblr</a>`;
    case 'requests': 
      return `<p class='output'><b><u>Requests</u></b><br>
        Ellexide Codes most certainly takes requests. <i>Asking for a requested code is not a guarantee you will get one.</i><br>
        All these requests must be made <b><u>SPECIFICALLY</u></b> on Discord. There are minor requirements such as activity on RPC, I don't
        want my code to go unused. <i>I reserve the right to refuse a request.</i>`;
    case 'code raffles':
      return `<p class='output'><b><u>Code Raffles</u></b><br>
        There are no upcoming raffles as of late.<br>
        <b><u>Last Raffle Winner:</u></b> Akasha`;
    case 'faq':
      return `<p class='output'><b><u>Frequently Asked Questions:</u></b><br><p>
      <p class='output'><u>How much do you charge for your codes?</u></p>
      <p>I like to make my customers give a budget. I want to be able to code for them something they can afford. So, I don't have a set price.</p>
      <p class='output'><u>Do you roleplay on this account?</p>
      <p>Does shitposting count? If so, then yes.</p>
      <p class='output'><u>Where can I see all of your available codes?</p>
      <p>I have a <a href="https://ellexide-codes.tumblr.com/" target="_blank">Tumblr</a> full of my codes--free and commissioned.</p>
      <p class='output'><u>Have a question that isn't here? DM me!</u></p>` ;
    case 'codes':
      return `<p class='output'><b><u>Complete Commissions/Requests</u></b></p>
      <p><a href="https://roleplay.chat/profile.php?user=Rider+of+Red" target="_blank">Rider of Red</a> | <a href="https://roleplay.chat/profile.php?user=Contract" target="_blank">Contract</a> | 
      <a href="https://roleplay.chat/profile.php?user=Riven+Laroche" target="_blank">Riven Laroche</a> | <a href="https://roleplay.chat/profile.php?user=Star+Girl" target="_blank">Star Girl</a> |
      <a href="https://roleplay.chat/profile.php?user=Her+Messenger" class="tooltip" style="color: #fff; text-shadow: 0 0 5px gold;" target="_blank" title="Gold Tier Profile">Richter</a> | 
      <a href="https://roleplay.chat/profile.php?user=Macy" class="tooltip" style="color: skyblue; text-shadow: 0 0 5px white" target="_blank" title="Random Raffle Winner">Macy Lantern</a> | 
      <a href="https://roleplay.chat/profile.php?user=.Alicia" target="_blank">Alicia</a>`;
    case 'pending':
      return `<p class='output'><b><u>Commission List</u></b></p>
      <p class='output errorcode'>Tsubaki</p>
      <p class='output'>Edgar Allan Poe</p>
      <p class='output'>Alistair Bellenmondt</p>
      <p class='output'>Elsif</p>
      <p class='output'>Akasha <i>[raffle draw winner]</i></p>`;
    case 'contact':
      return `<p class='output'><b>Discord:</b> Lil Monster#3557</p>
      <p class='output'><b>E-mail:</b> ellexidecodes@gmail.com</p>`;
    case 'coders':
      return `<p class='output'><b><u>More Coders</u></b></p>
      <a href="https://roleplay.chat/profile.php?user=UFO" target="_blank" class='output'>U.F.O</a><br>
      <a href="https://roleplay.chat/profile.php?user=Alcyone" target="_blank" class='output'>Alcyone</a><br>
      <a href="https://roleplay.chat/profile.php?user=Viking" target="_blank" class='output'>Alcyone</a><br>
      <a href="http://pastebin.com/u/A_Bad_Bitch" target="_blank" class='output'>A Bad Bitch</a><br>
      <a href="http://devilslocketdesigns.webs.com/" target="_blank" class='output'>Devilsocket Designs</a><br>`;
    case 'hello':
      return `Hey! You seem a bit lost. It's cool you said hello first though! Here's a tip: <i>If you are suddenly unable to type
      in the commands bar, click on the dollar sign ($)</i>`;
    case '':
      return '';
    default:
      return "Unknown Command || type '--help' to see the command module";
  }
  
}
