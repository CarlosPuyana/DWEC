
function estadistica() {
    let texot = document.getElementById("cadena").value
	texot = texot.toUpperCase()
    
    let letra = new Array()

    for (i=0; i<26; i++) {
        
        letra[i]=0
    }

	for (i=0; i<texot.length; i++) {
		switch (texot.charAt(i)) {
			case "A":
                letra[0]++ 
                break
			case "B":
                letra[1]++ 
                break
            case "C":
                letra[2]++
                break
			case "D":
                letra[3]++
                break
			case "E":
                letra[4]++
                break
			case "F":
                letra[5]++
                break
			case "G":
                letra[6]++
                break
            case "H":
                letra[7]++
                break
			case "I":
                letra[8]++
                break
			case "J":
                letra[9]++
                break
			case "K":
                letra[10]++
                break
			case "L":
                letra[11]++
                break
			case "M":
                letra[12]++
                break
			case "N":
                letra[13]++ 
                break
			case "O":
                letra[14]++ 
                break
			case "P":
                letra[15]++ 
                break
			case "Q":
                letra[16]++ 
                break
			case "R":
                letra[17]++ 
                break
            case "S": 
                letra[18]++ 
                break
            case "T": 
                letra[19]++ 
                break
            case "U": 
                letra[20]++ 
                break
            case "letra": 
                letra[21]++ 
                break
            case "W":
                letra[22]++
                break
            case "X": 
                letra[23]++ 
                break
            case "Y":
                letra[24]++ 
                break
            case "Z":
                letra[25]++ 
                break
		}
	}
	for (i=0; i<26; i++) {
		switch (i) {
            case 0: 
                document.write("A")
                break
			case 1:
                document.write("B") 
                break
            case 2: 
                document.write("C")
                break
            case 3: 
                document.write("D") 
                break
            case 4: 
                document.write("E") 
                break
            case 5: 
                document.write("F") 
                break
            case 6: 
                document.write("G") 
                break
            case 7: 
                document.write("H") 
                break
            case 8: 
                document.write("I") 
                break
            case 9: 
                document.write("J") 
                break
            case 10: 
                document.write("K") 
                break
            case 11: 
                document.write("L") 
                break
            case 12: 
                document.write("M") 
                break
            case 13: 
                document.write("N") 
                break
            case 14: 
                document.write("O") 
                break
            case 15:    
                document.write("P") 
                break
            case 16: 
                document.write("Q") 
                break
            case 17: 
                document.write("R") 
                break
            case 18: 
                document.write("S") 
                break
            case 19:    
                document.write("T") 
                break
            case 20: 
                document.write("U") 
                break
            case 21: 
                document.write("V") 
                break
            case 22: 
                document.write("W") 
                break
            case 23: 
                document.write("X") 
                break
            case 24: 
                document.write("Y") 
                break
            case 25: 
                document.write("Z") 
                break
        }
        
		document.write(": " + letra[i] + "<br>")
	}
}
