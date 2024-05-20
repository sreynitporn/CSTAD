let score1= parseFloat(prompt("input score 1"))
let score2= parseFloat(prompt("input score 2"))
let score3= parseFloat(prompt("input score 3"))

const total=score1+score2+score3;
document.write("<table border=1><tr><th>Score1</th> <th>Score2</th> <th>Score3</th> <th>total</th></tr>")
document.write("<tr><td>"+score1+"</td>")
document.write("<td>"+score2+"</td>")
document.write("<td>"+score3+"</td>")
document.write("<td>"+total+"</td>")
document.write("</tr></table>")


