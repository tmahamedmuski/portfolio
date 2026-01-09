import sys
from collections import Counter

# Category ranks (higher is better)
# Quintessential > Palindrome > Ordered > Trio > Duo > Standard
RANKS = {
    "QUINT": 5,
    "PAL": 4,
    "ORD": 3,
    "TRIO": 2,
    "DUO": 1,
    "STD": 0,
}

def rank_word(w: str):
    n = len(w)
    counts = Counter(w)

    # Quintessential: length >= 5 and all letters identical
    if n >= 5 and len(counts) == 1:
        return (RANKS["QUINT"], ord(w[0]))

    # Palindrome: length >= 3 and w == reverse(w)
    if n >= 3 and w == w[::-1]:
        return (RANKS["PAL"], n, w)

    # Ordered: non-decreasing letters
    if all(w[i] <= w[i+1] for i in range(n - 1)):
        highest = ord(max(w)) if n > 0 else -1
        return (RANKS["ORD"], n, highest)

    # Trio: exactly one letter occurs 3 times; no other pairs
    triples = [ch for ch, c in counts.items() if c == 3]
    if len(triples) == 1 and all(c in (1, 3) for c in counts.values()):
        return (RANKS["TRIO"], ord(triples[0]))

    # Duo: exactly one letter occurs 2 times; no other pairs or higher counts
    pairs = [ch for ch, c in counts.items() if c == 2]
    if len(pairs) == 1 and all(c in (1, 2) for c in counts.values()):
        return (RANKS["DUO"], ord(pairs[0]))

    # Standard: tie-break by lexicographic (later wins)
    return (RANKS["STD"], w)

def decide(black: str, white: str) -> str:
    rb, rw = rank_word(black), rank_word(white)
    if rb > rw:
        return "Black wins."
    if rb < rw:
        return "White wins."
    return "Tie."

def main():
    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        parts = line.split()
        if len(parts) != 2:
            continue
        black, white = parts
        print(decide(black, white))

if __name__ == "__main__":
    main()